import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
      <span className="rounded-5 border border-black border-1 p-2 me-1">40% of Total</span>
      <BsPlus className="fs-2"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}