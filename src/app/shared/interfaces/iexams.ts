export interface IExams {
      message: string;
  metadata: Metadata;
  exams: Exam[];
}


interface Exam {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}