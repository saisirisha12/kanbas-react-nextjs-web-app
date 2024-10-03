import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./controls";
import AssignmentControlButtons from "./assignment-control-buttons";
import { PiNotePencil } from "react-icons/pi";
import AssignmentsControlButtons from "./assignments-control-buttons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
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
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3 float-start my-auto" />
                <PiNotePencil className="me-2 fs-2 my-auto" />
                <div className="flex-fill">
                  <a
                    className="wd-assignment-link fw-bold"
                    href="/kanbas/courses/1234/assignments/1"
                  >
                    A1 - ENV + HTML
                  </a>
                  <br />
                  <div className="fs-6">
                    <span className="text-danger">Multiple Modules</span> | Not
                    available until May 6 at 12:00am |
                  </div>
                  <div className="fs-6">
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3 float-start my-auto" />
                <PiNotePencil className="me-2 fs-2 my-auto" />
                <div className="flex-fill">
                  <a
                    className="wd-assignment-link fw-bold"
                    href="/kanbas/courses/1234/assignments/2"
                  >
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <div className="fs-6">
                    <span className="text-danger">Multiple Modules</span> | Not
                    available until May 13 at 12:00am |
                  </div>
                  <div className="fs-6">
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3 float-start my-auto" />
                <PiNotePencil className="me-2 fs-2 my-auto" />
                <div className="flex-fill">
                  <a
                    className="wd-assignment-link fw-bold"
                    href="/kanbas/courses/1234/assignments/3"
                  >
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <div className="fs-6">
                    <span className="text-danger">Multiple Modules</span> | Not
                    available until May 20 at 12:00am |
                  </div>
                  <div className="fs-6">
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
