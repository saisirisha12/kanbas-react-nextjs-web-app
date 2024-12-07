// "use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { GoPencil } from "react-icons/go";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const mockQuestions = [
  {
    id: 1,
    type: "True/False",
    question:
      "An HTML label element can be associated with an HTML input element by setting their id attributes to the same value. Is this true or false?",
    options: ["True", "False"],
    points: 1,
  },
  {
    id: 2,
    type: "fill-in-the-blank",
    question: "HTML stands for ______.",
    options: [""],
    points: 2,
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Which of the following is not a semantic HTML element?",
    options: ["<article>", "<div>", "<footer>", "<section>"],
    points: 1,
  },
];

export default function QuestionNavigator() {
  const { courseId, quizId } = useParams();
  const { push } = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const goToQuestion = (questionId: number) => {
    setCurrentQuestion(questionId);
  };
  const goToNextQuestion = () => {
    if (currentQuestion < mockQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const renderQuestion = () => {
    const question = mockQuestions.find((q) => q.id === currentQuestion);

    if (!question) return <div>Question not found.</div>;

    if (question.type === "multiple-choice" || question.type === "True/False") {
      return (
        <div>
          <label htmlFor="quiz-question-number" />
          {question.question}
          {question.options.map((option, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                id={`q${question.id}-option${index}`}
                name={`q${question.id}`}
                value={option}
                checked={answers[question.id] === option}
                onChange={() => handleAnswerChange(question.id, option)}
              />
              <label
                className="form-check-label"
                htmlFor={`q${question.id}-option${index}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      );
    }

    if (question.type === "fill-in-the-blank") {
      return (
        <div>
          <p>{question.question}</p>
          <input
            className="form-control"
            type="text"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        </div>
      );
    }

    return <div>Unsupported question type.</div>;
  };

  return (
    <div className="container d-flex">
      <div className="col-md-9">
        <div className="card mb-4 mx-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Question {currentQuestion}</h5>
            <h5 className="card-title mb-0">
              {mockQuestions[currentQuestion - 1].points} pts
            </h5>
          </div>
          <div className="card-body">{renderQuestion()}</div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 mx-4">
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
              disabled={currentQuestion >= mockQuestions.length}
              onClick={goToNextQuestion}
            >
              Next
              <IoMdArrowDropright />
            </button>
          </div>
        </div>
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

          {mockQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => goToQuestion(q.id)}
              className={`list-group-item list-group-item-action ${
                currentQuestion === q.id ? "text-danger" : ""
              }`}
            >
              Question {q.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
