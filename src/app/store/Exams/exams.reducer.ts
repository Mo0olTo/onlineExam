import { createReducer, on } from "@ngrx/store";
import { initialExamsState } from "./exams.state";
import { loadExams, setExams } from "./exams.actions";

export const examsReducer = createReducer(initialExamsState , 

    on(loadExams , (state)=>({
        ...state,
        isLoading:true
    })) , 

    on(setExams , (state , {AllExams})=> ({
        ...state,
        allExams :AllExams,
       
    }))
)