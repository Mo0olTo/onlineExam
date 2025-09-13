import { Question, Questions,  } from "../../shared/interfaces/questions";

export interface questionsState {
    
    questions:Questions, 
    isLoading : boolean , 
    error: string|null

}


export const initialQuestionsState :questionsState =  {
    questions: {} as Questions ,
    isLoading : false , 
    error :null
}