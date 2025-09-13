import { Exam } from "./exams.modal"

export interface examsState{
    allExams:Exam[],
    isLoading:boolean , 
    error :null|string
}



export const initialExamsState:examsState = {
    allExams : [] as Exam [] ,
    isLoading : false , 
    error :null

}