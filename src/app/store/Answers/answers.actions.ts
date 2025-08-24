import { createAction, props } from "@ngrx/store";
import { Answer, Question, Questions } from "../../shared/interfaces/questions";
import { SelectedAnswers } from "../../shared/interfaces/selected-answers";

export const loadAnswers = createAction('[Answers}  load Answers')
export const setAnswers = createAction('[Answers}  set Answers' , 
    props<{AllAnswers : Answer[]}>()
)

export const setUserAnswers = createAction('[Answers , user Answers' , 
    props<{answers : SelectedAnswers[]}>()
)