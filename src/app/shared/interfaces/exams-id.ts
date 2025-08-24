export interface ExamsId {
      message: string;
  exam: Exam;
}


interface RootObject {

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