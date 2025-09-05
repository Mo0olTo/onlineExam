export interface SelectedAnswers {
    questionId: string ,
     answerKey: string 
} 


export interface checkAnswers{ 
  answers: AnswerResult[];
  time: number;
}


export interface AnswerResult {
  questionId: string;
  correct: string;
}


