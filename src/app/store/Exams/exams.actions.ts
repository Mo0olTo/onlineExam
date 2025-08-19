import { createAction, props } from '@ngrx/store';
import { Exam } from './exams.modal';


export const loadExams = createAction('[Exams] load Exams')

export const setExams = createAction('[Exams] set Exams' ,
        props<{AllExams:Exam[]}>() ) 