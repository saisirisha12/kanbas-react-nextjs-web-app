import { useParams, useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControls() {
  const { courseId } = useParams();
  const { push } = useRouter();

  const createAssignment = () => {
    push(`/kanbas/courses/${courseId}/assignments/new`);
  };

  return (
    <div id="wd-assignments-controls">
      <div
        className="float-start position-relative"
        style={{ maxWidth: "300px", width: "100%" }}
      >
        <i className="bi bi-search position-absolute ps-3 mt-2"></i>
        <input
          id="wd-search-assignment"
          type="text"
          placeholder="Search..."
          className="form-control ps-5 fs-5"
        />
      </div>
      <button
        id="wd-add-assignment"
        className="btn btn-lg btn-danger me-1 float-end"
        onClick={createAssignment}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button
        id="wd-add-assignment-group"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
    </div>
  );
}
