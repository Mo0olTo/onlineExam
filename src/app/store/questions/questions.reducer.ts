import { createReducer, on } from "@ngrx/store";
import { initialQuestionsState } from "./questions.state";
import { loadQuestions, setQuestions } from "./questions.actions";

export const questionsReducer = createReducer(initialQuestionsState , 

    on(loadQuestions , (state)=>({
        ...state,
        isLoading:true
    })) ,

    on(setQuestions , (state , {AllQuestions})=>({
        ...state , 
        questions :AllQuestions , 
        
    }))
)