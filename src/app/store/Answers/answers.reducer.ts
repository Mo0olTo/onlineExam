import { createReducer, on } from "@ngrx/store";
import { initialAnswersState } from "./answers.state";
import { loadAnswers, setAnswers, setUserAnswers } from "./answers.actions";

export const asnwersReducer = createReducer (initialAnswersState , 

    on(loadAnswers , (state)=>({
        ...state , 
        isLoading:true
    })) , 

    on(setAnswers , (state  , {AllAnswers})=>({
        ...state , 
        answers :AllAnswers , 
        
    })) , 

    on(setUserAnswers , (state , {answers})=>({
        ...state , 
        userAnswers :answers
    }))
)