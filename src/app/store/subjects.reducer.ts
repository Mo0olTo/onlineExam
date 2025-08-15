
import { createReducer, on } from "@ngrx/store";
import { initialSubjectsState } from "./subjects.state";
import { loadSubjects, setSubjects } from "./subjects.actions";

export const subjectReducer = createReducer(initialSubjectsState,

    on(loadSubjects, (state)=>({
        ...state,
        isLoading:true,
    })) ,


on(setSubjects , (state, {subjects}) =>({
    ...state , 
    subjects,
    isLoading:false
})





))