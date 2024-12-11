export interface Course {
  _id: string;
  number: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
}

export interface Module {
  _id?: string;
  name: string;
  course: string;
  lessons: Lesson[];
  editing?: boolean;
}

export interface Lesson {
  _id?: string;
  name: string;
  description: string;
  module: string;
}

export interface Assignment {
  _id?: string;
  title: string;
  description: string;
  course: string;
  modules: string[];
  availableFrom: Date;
  availableUntil: Date;
  dueDate: Date;
  points: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  password: string;
  role: string;
  section: string;
  lastActivity: Date;
  totalActivity: number;
}

export interface Quiz {
  _id?: string;
  title: string;
  description: string;
  assignedTo: string;
  type: string;
  course: string;
  points: number;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  attempts?: number;
  showCorrectAnswers?: string;
  accessCode?: string;
  oneQuestionAtATime?: boolean;
  webCamRequired?: boolean;
  lockQuestionsAfterAnswering?: boolean;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  published: boolean;
}

export interface Question {
  // _id?: number;
  _id?: string;
  title: string;
  questionText: string;
  quiz: string;
  type: string;
  options: {
    id: number;
    text: string;
  }[];
  correctAnswers: {
    id: number;
    text: string;
  }[];
  points: number;
}

export interface Answer {
  _id?: number;
  question: string;
  answer: string;
}

export interface QuizAttempt {
  _id?: string;
  quiz: string;
  student: string;
  attemptNumber: number;
  answers: Answer[];
  score: number;
  date: Date | null
}
