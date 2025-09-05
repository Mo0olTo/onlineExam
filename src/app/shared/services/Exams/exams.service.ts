import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/env-baseUrl';
import { exams } from '../../../store/Exams/exams.modal';
import { env } from 'process';
import { ExamsId } from '../../interfaces/exams-id';
import { Question, Questions } from '../../interfaces/questions';
import { checkAnswers, SelectedAnswers } from '../../interfaces/selected-answers';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

private readonly httpClient=inject(HttpClient) 

    getAllExams():Observable<exams>{
      return this.httpClient.get<exams>(`${environment.baseUrl}exams`)
    }


    getExamById(id:string|null):Observable<ExamsId>{
      return this.httpClient.get<ExamsId>(`${environment.baseUrl}exams/${id}`)
    }
    

    getExamQuestions(examId:string):Observable<Questions>{
      return this.httpClient.get<Questions>(`${environment.baseUrl}questions?exam=${examId}`)
    }


    
    getExamAnswers(examId:string):Observable<Questions>{
      return this.httpClient.get<Questions>(`${environment.baseUrl}questions?exam=${examId}`)
    }




    checkAnswers(data:SelectedAnswers[]):Observable<checkAnswers>{
      return this.httpClient.post<checkAnswers>(`${environment.baseUrl}questions/check` , {data})
    }

}
