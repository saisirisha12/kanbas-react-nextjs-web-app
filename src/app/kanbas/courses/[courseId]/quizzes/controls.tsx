import { useParams, useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizControls() {
  const { courseId } = useParams();
  const { push } = useRouter();

  const createQuiz = () => {
    push(`/kanbas/courses/${courseId}/quizzes/new/editor`);
  };

  return (
    <div id="wd-quizzes-controls">
      <div
        className="float-start position-relative"
        style={{ maxWidth: "300px", width: "100%" }}
      >
        <i className="bi bi-search position-absolute ps-3 mt-2"></i>
        <input
          id="wd-search-quiz"
          type="text"
          placeholder="Search For Quiz"
          className="form-control ps-5 fs-5"
        />
      </div>
      <div>
        <button className="btn btn-secondary fs-4 float-end">
          <IoEllipsisVertical />
        </button>
        <button
          id="wd-add-quiz"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={createQuiz}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Quiz
        </button>
      </div>
    </div>
  );
}
