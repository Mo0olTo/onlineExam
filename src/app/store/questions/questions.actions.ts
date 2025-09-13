
import { createAction, props } from '@ngrx/store';
import { Question, Questions } from '../../shared/interfaces/questions';


export const loadQuestions = createAction('[Questions] load Questions')

export const setQuestions = createAction('[Questions] set Questions' , 
    props<{AllQuestions:Questions}>())