import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/green-checkmark";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end my-auto text-nowrap">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}