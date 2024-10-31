import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./green-checkmark";
import { BsPlus } from "react-icons/bs";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  deleteModule,
  editModule,
} from "@/app/kanbas/store/reducers/modulesReducer";

export default function ModuleControlButtons({
  moduleId,
}: {
  moduleId: string;
}) {
  const dispatch = useDispatch();

  return (
    <div className="float-end">
      <FaPencil
        className="text-primary me-2 mb-1"
        onClick={() => dispatch(editModule(moduleId))}
      />
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => dispatch(deleteModule(moduleId))}
      />
      <GreenCheckmark />
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
