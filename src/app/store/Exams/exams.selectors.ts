import { createFeatureSelector, createSelector } from "@ngrx/store";
import { examsState } from "./exams.state";

export const selectExamsState = createFeatureSelector<examsState>('Exams')

export const selectAllExams = createSelector(selectExamsState , (state)=>state.allExams )