import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../core/environment/env-baseUrl';
import { Observable } from 'rxjs';
import { Isubjects } from '../../interfaces/isubjects';
import { Subject, SubjectsResponse } from '../../../store/subjects.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private readonly httpClient=inject(HttpClient)



  getAllSubjects():Observable<SubjectsResponse>{
    return this.httpClient.get<SubjectsResponse>(`${environment.baseUrl}subjects`,
      
     )
  }


  

    
}
