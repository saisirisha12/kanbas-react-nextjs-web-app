/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  updateAssignment,
} from "@/app/kanbas/store/reducers/assignmentsReducer";

export default function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find(
    (assignment: any) => assignment._id === parseInt(assignmentId as string)
  );
  const [newAssignment, setNewAssignment] = useState(
    assignment !== undefined
      ? assignment
      : {
          _id: assignments[assignments.length - 1]._id + 1,
          title: "",
          course: courseId,
          modules: [],
          availableFrom: "",
          availableUntil: "",
          dueDate: "",
          points: 0,
          description: "",
        }
  );

  const saveChanges = () => {
    if (assignmentId === "new") {
      dispatch(addAssignment(newAssignment));
    } else if (assignment) {
      dispatch(updateAssignment(newAssignment));
    }
    push(`/kanbas/courses/${courseId}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="wd-name"
            defaultValue={newAssignment?.title}
            onChange={(e) =>
              setNewAssignment({ ...newAssignment, title: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <textarea
            id="wd-description"
            className="form-control"
            rows={5}
            defaultValue={newAssignment?.description}
            onChange={(e) =>
              setNewAssignment({
                ...newAssignment,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points
          </label>
          <div className="col-sm-10">
            <input
              id="wd-points"
              className="form-control"
              defaultValue={newAssignment?.points}
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  points: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">
            Assignment Group
          </label>
          <div className="col-sm-10">
            <select
              id="wd-group"
              className="form-select"
              defaultValue="assignments"
            >
              <option value="assignments">ASSIGNMENTS</option>
              <option value="option">OPTION</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label"
          >
            Display Grade as
          </label>
          <div className="col-sm-10">
            <select
              id="wd-display-grade-as"
              className="form-select"
              defaultValue="percentage"
            >
              <option value="percentage">Percentage</option>
              <option value="option">Option</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label"
          >
            Submission Type
          </label>
          <div className="col-sm-10">
            <div className="border border-1 rounded-1 p-3">
              <select
                id="wd-submission-type"
                className="form-select"
                defaultValue="online"
              >
                <option value="online">Online</option>
                <option value="option">Option</option>
              </select>
              <br />
              <div className="col-sm-10">
                <label className="form-label fw-bold">
                  Online Entry Options
                </label>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-text-entry"
                    name="check-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-website-url"
                    name="check-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-media-recordings"
                    name="check-entry"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-student-annotation"
                    name="check-entry"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-file-upload"
                    name="check-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-10">
            <div className="border border-1 rounded-1 p-3">
              <label htmlFor="wd-assign-to" className="form-label fw-bold">
                Assign to
              </label>
              <input
                id="wd-assign-to"
                className="form-control"
                defaultValue="Everyone"
              />
              <label htmlFor="wd-due-date" className="form-label fw-bold mt-3">
                Due
              </label>
              <input
                id="wd-due-date"
                className="form-control"
                type="datetime-local"
                defaultValue={newAssignment?.dueDate}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    dueDate: e.target.value,
                  })
                }
              />
              <div className="d-flex mt-3">
                <div className="w-50">
                  <label
                    htmlFor="wd-available-from"
                    className="form-label fw-bold"
                  >
                    Available from
                  </label>
                  <input
                    id="wd-available-from"
                    className="form-control"
                    type="datetime-local"
                    defaultValue={newAssignment?.availableFrom}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        availableFrom: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-50">
                  <label htmlFor="wd-until" className="form-label fw-bold">
                    Until
                  </label>
                  <input
                    id="wd-until"
                    className="form-control"
                    type="datetime-local"
                    defaultValue={newAssignment?.availableUntil}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        availableUntil: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="float-end">
          <Link
            className="btn btn-secondary me-1"
            href={`/kanbas/courses/${courseId}/assignments`}
          >
            Cancel
          </Link>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              saveChanges();
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
