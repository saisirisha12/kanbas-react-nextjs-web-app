"use client";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./controls";
import AssignmentControlButtons from "./assignment-control-buttons";
import { PiNotePencil } from "react-icons/pi";
import AssignmentsControlButtons from "./assignments-control-buttons";
import { useParams } from "next/navigation";
import * as db from "../../../database";

function formatDateTime(dateString: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);

  const month = months[date.getMonth()];
  const day = date.getDate();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  return `${month} ${day} at ${hours}:${minutes}${ampm}`;
}

export default function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;

  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentsControlButtons />
          </div>
          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment) => assignment.course === courseId)
              .map((assignment) => (
                <li
                  key={assignment._id}
                  className="wd-assignment-list-item list-group-item p-3 ps-1"
                >
                  <div className="d-flex">
                    <BsGripVertical className="me-2 fs-3 float-start my-auto" />
                    <PiNotePencil className="me-2 fs-2 my-auto" />
                    <div className="flex-fill">
                      <a
                        className="wd-assignment-link fw-bold"
                        href={`/kanbas/courses/${courseId}/assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                      <br />
                      <div className="fs-6">
                        {assignment.modules.length > 1 && (
                          <>
                            <span className="text-danger">
                              Multiple Modules
                            </span>
                            <span> | </span>
                          </>
                        )}
                        Not available until{" "}
                        {formatDateTime(assignment.availableFrom)} |
                      </div>
                      <div className="fs-6">
                        <b>Due</b> {formatDateTime(assignment.dueDate)} |{" "}
                        {assignment.points} pts
                      </div>
                    </div>
                    <AssignmentControlButtons />
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
