
import { Subject } from "./subjects.model";


export interface SubjectsState{

    subjects: Subject [], 
    isLoading:boolean,
    error:string|null
}


export const initialSubjectsState : SubjectsState =  { 

   subjects : [] ,
    isLoading :false , 
    error :null

    

}