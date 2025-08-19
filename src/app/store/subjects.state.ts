
import { Subject } from "./subjects.model";


export interface SubjectsState{

    subjects: Subject [], 
    isLoading:boolean,
    error:string|null
}


export const initialSubjectsState : SubjectsState =  { 

    subjects : [] as Subject[] ,
    isLoading :false , 
    error :null

    

}