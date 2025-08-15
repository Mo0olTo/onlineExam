import { SubjectsState } from './subjects.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectSubjectsState = createFeatureSelector<SubjectsState>('subjects')

export const selectAllSubjects = createSelector(selectSubjectsState , (state)=> state.subjects )