import axios from "axios";
import { Assignment, Module, Question, Quiz, QuizAttempt } from "../types";

const REMOTE_SERVER = process.env.NEXT_PUBLIC_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;

export const findUsersForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/users`);
  return data;
};

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return data;
};

export const createModuleForCourse = async (
  courseId: string,
  module: Module
) => {
  const { data } = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return data;
};

export const updateModule = async (module: Module) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

export const deleteModule = async (moduleId: string) => {
  const { data } = await axios.delete(`${MODULES_API}/${moduleId}`);
  return data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};

export const createAssignmentForCourse = async (
  courseId: string,
  assignment: Assignment
) => {
  const { data } = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return data;
};

export const updateAssignment = async (assignment: Assignment) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

export const findQuizzesForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return data;
};

export const deleteQuiz = async (quizId: string) => {
  const { data } = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return data;
};

export const createQuizForCourse = async (courseId: string, quiz: Quiz) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  return data;
};

export const updateQuiz = async (quiz: Quiz) => {
  const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return data;
};

export const addQuestionToQuiz = async (quizId: string, question: Question) => {
  const { data } = await axios.post(
    `${QUIZZES_API}/${quizId}/questions`,
    question
  );
  return data;
};

export const findQuestionsForQuiz = async (quizId: string) => {
  const { data } = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
  return data;
};

export const deleteQuestion = async (questionId: string) => {
  const { data } = await axios.delete(`${QUESTIONS_API}/${questionId}`);
  return data;
};

export const updateQuestion = async (question: Question) => {
  const { data } = await axios.put(`${QUESTIONS_API}/${question._id}`, question);
  return data;
};

export const addAnswerToQuiz = async (quizId: string, answer: QuizAttempt) => {
  const { data } = await axios.post(
    `${QUIZZES_API}/${quizId}/answers`,
    answer
  );
  return data;
};
 
export const getLatestQuizAttempt = async(userId:string,quizId:string) => {
  const { data } = await axios.get(
    `${QUIZZES_API}/${quizId}/users/${userId}/LatestAttempt`,
  );
  return data;
}

export const calcUserQuizScore = async(userId:string,quizId:string) => {
  const { data } = await axios.get(
    `${QUIZZES_API}/${quizId}/users/${userId}/calcScore`,
  );
  return data;
}

export const calcQuizPoints = async(quizId:string) => {
  const { data } = await axios.get(
    `${QUIZZES_API}/${quizId}/calcQuizPoints`,
  );
  return data;
}

export const getQuizAttempts = async(userId:string,quizId:string) => {
  const { data } = await axios.get(
    `${QUIZZES_API}/${quizId}/users/${userId}/allowedNumberOfAttempts`,
  );
  return data;
}

