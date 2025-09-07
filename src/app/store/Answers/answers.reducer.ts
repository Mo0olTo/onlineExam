import { createReducer, on } from "@ngrx/store";
import { initialAnswersState } from "./answers.state";
import { loadAnswers, resetAnswers, setAnswers, setUserAnswers } from "./answers.actions";
import { state } from "@angular/animations";

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
    })) ,

    on(resetAnswers , (state)=>({
        ...state , 
        userAnswers :[]
    }))
)