/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams, useRouter } from "next/navigation";

export default function AccessCodeDialog() {
    const {courseId, quizId} = useParams();
    const { push } = useRouter();


  return (
    <div
      id={`wd-start-quiz-dialog`}
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Provide Access Code
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <div className="mb-3 text-wrap">
              Enter the Access code for the quiz
              <input className="row ms-3 mt-3"type="text"></input>
            </div>
          </div>
          <div className="modal-footer">
            
            <button className="btn btn-primary"
            data-bs-dismiss="modal"
            onClick={() =>
                push(`/kanbas/courses/${courseId}/quizzes/${quizId}/preview`)
              }>
                OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
