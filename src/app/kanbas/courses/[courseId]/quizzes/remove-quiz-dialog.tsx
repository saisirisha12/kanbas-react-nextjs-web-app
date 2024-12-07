/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../client";
import { removeQuiz } from "@/app/kanbas/store/reducers/quizzesReducer";

export default function RemoveQuizDialog({ quizId }: { quizId: string }) {
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((a: any) => a._id === quizId);
  const dispatch = useDispatch();

  const deleteQuiz = async () => {
    try {
      await client.deleteQuiz(quizId as string);
      dispatch(removeQuiz(quizId));
    } catch (error) {
      alert("Unable to delete quiz. Please try again.");
    }
  };

  return (
    <div
      id={`wd-remove-quiz-${quizId}-dialog`}
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Remove quiz?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3 text-wrap">
              Are you sure you want to remove the quiz{" "}
              <strong>{quiz?.title}</strong>?
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={deleteQuiz}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
