
import { Answer, Question, Questions } from "../../shared/interfaces/questions";
import { SelectedAnswers } from "../../shared/interfaces/selected-answers";

export interface answerState {
    userAnswers : SelectedAnswers[]
    answers : Answer [] 
    isLoading : boolean, 
    error : string| null
}

export const initialAnswersState :answerState = {

    userAnswers:[],
    answers : [] , 
    isLoading:false , 
    error:null

}