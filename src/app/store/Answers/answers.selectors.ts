import { createFeatureSelector, createSelector } from "@ngrx/store";
import { answerState } from "./answers.state";


export const SelectAnswersState = createFeatureSelector<answerState>('Answers')
export const selectAllAnswers = createSelector(SelectAnswersState , (state)=>state.answers)



export const SelectUserAnswersState = createFeatureSelector<answerState>('Answers')
export const selectUserAnswers = createSelector(SelectAnswersState , (state)=>state.userAnswers)