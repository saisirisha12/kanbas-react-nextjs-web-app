// "use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import {
  setQuestions,
} from "@/app/kanbas/store/reducers/questionsReducer";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../../client";
import { Question } from "@/app/kanbas/types";
import QuestionEditor from "./editor/QuestionEditor";
import RemoveQuestionDialog from "./remove-question-dialog";


export default function QuestionNavigator() {
  const { courseId, quizId } = useParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);


  const fetchQuestions = useCallback(async () => {
    const questions = await client.findQuestionsForQuiz(quizId as string);
    dispatch(setQuestions(questions));
  }, [courseId, dispatch]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const renderQuestion = (question:Question) => {

    if (!question) return <div>Question not found.</div>;

    if (question.type === "Multiple Choice") {
      return (
        <div>
          <label htmlFor="quiz-question-number" />
          {question.questionText}
          {question.options.map((option, index) => (
            <div className="form-check" key={index}>
              {currentUser?.role === "FACULTY" &&
              <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}-option${index}`}
                name={`q${question._id}`}
                value={option.text}
                checked={question.correctAnswers[0].text === option.text}/>
              }
              <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}-option${index}`}
                name={`q${question._id}`}
                value={option.text}/>
              <label
                className="form-check-label"
                htmlFor={`q${question._id}-option${index}`}
              >
                {option.text}
              </label>
            </div>
          ))}
        </div>
      );
    }

    if (question.type === "True/False") {
      return (
        <div>
          <label htmlFor="quiz-question-number" />
          {question.questionText}
            <div className="form-check">
            {currentUser?.role === "FACULTY" &&
              <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}`}
                name={`q${question._id}`}
                value={"true"}
                checked={question.correctAnswers[0].text === "true"}
              />
            }
            <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}`}
                name={`q${question._id}`}
                value={"true"} />
              <label
                className="form-check-label"
                htmlFor={`q${question._id}`}>
                True
              </label>
            </div>
            <div className="form-check">
            {currentUser?.role === "FACULTY" &&
              <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}`}
                name={`q${question._id}`}
                value={"false"}
                checked={question.correctAnswers[0].text === "false"} />
            }
            <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}`}
                name={`q${question._id}`}
                value={"false"} />
              <label
                className="form-check-label"
                htmlFor={`q${question._id}`}>
                False
              </label>
            </div>
        </div>
      );
    }

    if (question.type === "Fill in the Blanks") {
      return (
        <div>
          <p>{question.questionText}</p>
          { currentUser?.role === "FACULTY" && question.correctAnswers.map((answer, index) => (
            <input
              key={index} 
              className="form-control"
              type="text"
              value={answer.text}
            />
          ))}
          <input
              className="form-control"
              type="text"
            />
        </div>
      );
    }

    return <div>Unsupported question type.</div>;
  };

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const currentQuestion = questions[currentQuestionIndex];
  const isEditor = pathname.includes("/editor");


  return (
      <div className="container d-flex">
        <div className="col-md-9">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Question {currentQuestionIndex + 1}</h5>
              <h5 className="card-title mb-0">
                {currentQuestion?.points} pts
              </h5>
            </div>
            <div className="card-body">{renderQuestion(currentQuestion)}</div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-dark mb-0"
                disabled={currentQuestion <= 1}
                onClick={goToPreviousQuestion}
              >
                <IoMdArrowDropleft />
                Previous
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-dark mb-0"
                disabled={currentQuestion >= questions.length}
                onClick={goToNextQuestion}
              >
                Next
                <IoMdArrowDropright />
              </button>
            </div>
          </div>

          {isEditor && (
          <div className="d-flex justify-content-between mt-4">
            <button
                id="wd-edit-question-btn"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#wd-quiz-${currentQuestion?._id}-dialog`}>
                Edit Existing Question
              </button>
            <button 
            className="btn btn-danger"
            id="wd-remove-question-btn"
            data-bs-toggle="modal"
            data-bs-target={`#wd-remove-question-${currentQuestion?._id}-dialog`}
            >
              Delete</button>
              <RemoveQuestionDialog questionId={currentQuestion?._id} />
          </div>
        )}

        </div>


        <div className="col-md-3 ms-2">
          <div className="list-group">
          { currentUser?.role === "FACULTY" &&
            <div className="d-flex justify-content-center border p-2">
              <button
                className="btn btn-outline-secondary text-muted me-3"
                onClick={() =>
                  push(`/kanbas/courses/${courseId}/quizzes/${quizId}/editor`)
                }
              >
                <GoPencil className="mt-1 me-2" />
                Keep Editing This Quiz
              </button>
            </div>
          }

            {questions.map((question: any, index: number) => (
              <button
                key={question._id}
                onClick={() => goToQuestion(index)}
                className={`list-group-item list-group-item-action ${
                  currentQuestionIndex === index ? "text-danger" : ""
                }`}
              >
                Question {index + 1}
              </button>
            ))}
          </div>
        </div>
        
        <div
        className="modal fade"
        id={`wd-quiz-${currentQuestion?._id}-dialog`}
        tabIndex={-1}
        aria-labelledby="wd-quiz-dialog-label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <QuestionEditor questionId={currentQuestion?._id}/>
            </div>
          </div>
        </div>
      </div> 
      </div>
  );
}
