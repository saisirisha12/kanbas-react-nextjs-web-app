// "use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import {
  setQuestions,
  updateQuestion,
} from "@/app/kanbas/store/reducers/questionsReducer";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../../../client";
import { Question } from "@/app/kanbas/types";
import QuestionEditor from "../editor/QuestionEditor";
import RemoveQuestionDialog from "../editor/remove-question-dialog";


export default function QuestionNavigator() {
  const { courseId, quizId } = useParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const dispatch = useDispatch();

  const [questionId, setQuestionId] = useState<string | null>(null);

  const fetchQuestions = useCallback(async () => {
    const questions = await client.findQuestionsForQuiz(quizId as string);
    dispatch(setQuestions(questions));
  }, [courseId, dispatch]);

  // const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [answers, setAnswers] = useState<Record<number, string>>({});

  // const goToQuestion = (questionId: number) => {
  //   setCurrentQuestion(questionId);
  // };
  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // const goToNextQuestion = () => {
  //   if (currentQuestion < questions.length) {
  //     setCurrentQuestion((prev) => prev + 1);
  //   }
  // };
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // const goToPreviousQuestion = () => {
  //   if (currentQuestion > 1) {
  //     setCurrentQuestion((prev) => prev - 1);
  //   }
  // };
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // const handleAnswerChange = (questionId?: number, answer: string[]) => {
  //   setAnswers((prev) => ({
  //     ...prev,
  //     [questionId]: answer,
  //   }));
  // };

  // const handleAnswerChange = ({answer: string[]}, questionId?: number) => {
  //   setAnswers((prev) => ({
  //     ...prev,
  //     [questionId!]: answer, // Use questionId as the key
  //   }));
  // };

  const renderQuestion = (question:Question) => {
    // const question = questions.find((q) => q.id === currentQuestion);

    if (!question) return <div>Question not found.</div>;

    if (question.type === "Multiple Choice") {
      return (
        <div>
          <label htmlFor="quiz-question-number" />
          {/* {currentQuestion} */}
          {question.questionText}
          {question.options.map((option, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}-option${index}`}
                name={`q${question._id}`}
                value={option.text}
                checked={question.correctAnswers[0].text === option.text}
                // onChange={() => handleAnswerChange(option, question._id)}
              />
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
          {/* {currentQuestion} */}
          {question.questionText}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}`}
                name={`q${question._id}`}
                value={"true"}
                checked={question.correctAnswers[0].text === "true"}
                // onChange={() => handleAnswerChange(option, question._id)}
              />
              <label
                className="form-check-label"
                htmlFor={`q${question._id}`}>
                True
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={`q${question._id}`}
                name={`q${question._id}`}
                value={"false"}
                checked={question.correctAnswers[0].text === "false"}
                // onChange={() => handleAnswerChange(option, question._id)}
              />
              <label
                className="form-check-label"
                htmlFor={`q${question._id}`}>
                False
              </label>
            </div>
        </div>
      );
    }

    // if (question.type === "Fill in the Blanks") {
    //   return (
    //     <div>
    //       <p>{question.questionText}</p>
    //       <input
    //         className="form-control"
    //         type="text"
    //         value={question.correctAnswers[0].text}
    //         // onChange={(e) => handleAnswerChange(question.id, e.target.value)}
    //       />
    //     </div>
    //   );
    // }

    if (question.type === "Fill in the Blanks") {
      return (
        <div>
          <p>{question.questionText}</p>
          {question.correctAnswers.map((answer, index) => (
            <input
              key={index} 
              className="form-control"
              type="text"
              value={answer.text}
              // onChange={(e) => handleAnswerChange(question.id, index, e.target.value)}
            />
          ))}
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

  // const handleEditQuestion = (id: string) => {
  //   console.log(id);
  //   setQuestionId(id); // Reset questionId for adding a new question
  // };

  return (
    // <div className="container">
    //   {questions.map((question: any) => (
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
            <button className="btn btn-danger"
            id="wd-remove-question-btn"
            data-bs-toggle="modal"
            data-bs-target={`wd-remove-question-${currentQuestion?._id}-dialog`}>
              Delete</button>
              <RemoveQuestionDialog questionId={currentQuestion?._id} />
          </div>
        )}

        </div>

        <div className="col-md-3 ms-2">
          <div className="list-group">
            <div className="d-flex justify-content-start border p-2">
              <button
                className="text-muted me-3"
                onClick={() =>
                  push(`/kanbas/courses/${courseId}/quizzes/${quizId}/editor`)
                }
              >
                <GoPencil className="mt-1 me-2" />
                Keep Editing This Quiz
              </button>
            </div>

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
