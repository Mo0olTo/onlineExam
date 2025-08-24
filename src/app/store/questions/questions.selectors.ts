import { createFeatureSelector, createSelector } from '@ngrx/store';

import { questionsState } from './questions.state';

export const selectQuestionsState= createFeatureSelector<questionsState>('Questions') 

export const selectAllquestions = createSelector(selectQuestionsState , (state)=>state.questions)