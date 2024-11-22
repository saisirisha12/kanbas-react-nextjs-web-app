import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/green-checkmark";
import { FaTrash } from "react-icons/fa6";
import RemoveAssignmentDialog from "./remove-assignment-dialog";

export default function AssignmentControlButtons({
  assignmentId,
}: {
  assignmentId: string;
}) {
  return (
    <div className="float-end my-auto text-nowrap">
      <FaTrash
        id="wd-remove-assignment-btn"
        data-bs-toggle="modal"
        data-bs-target={`#wd-remove-assignment-${assignmentId}-dialog`}
        className="text-danger me-2 mb-1"
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <RemoveAssignmentDialog assignmentId={assignmentId} />
    </div>
  );
}
