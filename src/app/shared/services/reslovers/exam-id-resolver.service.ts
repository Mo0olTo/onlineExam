import { inject, Injectable } from '@angular/core';
import { ExamsService } from '../Exams/exams.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExamIdResolverService implements Resolve<any>{

  private readonly examsService=inject(ExamsService)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const examId=route.paramMap.get('id')
    return this.examsService.getExamById(examId)
      
  }


  


}
