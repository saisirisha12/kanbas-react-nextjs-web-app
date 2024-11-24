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
  _id: string;
  name: string;
  course: string;
  lessons: Lesson[];
  editing?: boolean;
}

export interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  modules: string[];
  availableFrom: string;
  availableUntil: string;
  dueDate: string;
  points: number;
}
