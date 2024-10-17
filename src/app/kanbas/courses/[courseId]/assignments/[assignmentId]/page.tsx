"use client";

import { useParams } from "next/navigation";
import * as db from "../../../../database";
import Link from "next/link";

export default function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

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
            defaultValue={assignment?.title}
          />
        </div>
        <div className="mb-3">
          <textarea
            id="wd-description"
            className="form-control"
            rows={5}
            defaultValue={assignment?.description}
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
              defaultValue={assignment?.points}
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
                defaultValue={assignment?.dueDate}
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
                    defaultValue={assignment?.availableFrom}
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
                    defaultValue=""
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
            href={`/kanbas/courses/${assignment?.course}/assignments`}
          >
            Cancel
          </Link>
          <Link
            className="btn btn-danger"
            href={`/kanbas/courses/${assignment?.course}/assignments`}
          >
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}
