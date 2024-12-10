/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../../client";
import { removeQuestion } from "@/app/kanbas/store/reducers/questionsReducer";

export default function RemoveQuestionDialog({ questionId }: { questionId: string }) {
  // const { questions } = useSelector((state: any) => state.quizzesReducer);
  // const question = questions.find((q: any) => q._id === questionId);
  const dispatch = useDispatch();

  const deleteQuestion = async () => {
    try {
      await client.deleteQuestion(questionId as string);
      dispatch(removeQuestion(questionId));
    } catch (error) {
      alert("Unable to delete question. Please try again.");
    }
  };

  return (
    <div
      id={`wd-remove-question-${questionId}-dialog`}
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Remove question?
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
              Are you sure you want to remove the question?
              {/* <strong>{question?.}</strong>? */}
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
              onClick={deleteQuestion}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
