import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environment/env-baseUrl';
import { exams } from '../../../store/Exams/exams.modal';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

private readonly httpClient=inject(HttpClient) 

    getAllExams():Observable<exams>{
      return this.httpClient.get<exams>(`${environment.baseUrl}exams`)
    }


    getExamById(id:string|null):Observable<exams>{
      return this.httpClient.get<exams>(`${environment.baseUrl}exams/${id}`)
    }
  


}
