import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { SubjectsService } from '../../../shared/services/subjects/subjects.service';
import {  Store } from '@ngrx/store';
import* as subjectsActions from '../../../store/subjects.actions';
import* as subjectsSelctors from './../../../store/subjects.selctors';
import { Observable } from 'rxjs';
import * as examsSelectors from './../../../store/Exams/exams.selectors';
import { Subject, SubjectsResponse } from '../../../store/subjects.model';
import { RouterLink } from '@angular/router';
import { Exam } from '../../../store/Exams/exams.modal';


@Component({
  selector: 'app-dash-board',
  imports: [AsyncPipe ,RouterLink],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements AfterViewInit ,OnInit { 

    private readonly plat_id=inject(PLATFORM_ID) 
  private readonly flowbiteService=inject(FlowbiteService);
  private readonly subjectsService=inject(SubjectsService);
  private readonly store=inject(Store);


  subjectList$!:Observable<Subject[]>
   getAllsubjectList$!:Observable<Subject[]>
   getAll:number=0
  private allExams = signal<Exam[]>([]);
  


    ngAfterViewInit(): void {
        
    if (isPlatformBrowser(this.plat_id)) {
      this.flowbiteService.loadFlowbite((flowbite)=>{})
           
    }
    }
    

    ngOnInit(): void {
        this.loadSubjects()
      this.getAllSubjects()  

          this.store.select(examsSelectors.selectAllExams).subscribe((exams) => {
            this.allExams.set(exams);
   
       
          });
    }


   


    loadSubjects(){
      this.subjectsService.getAllSubjects().subscribe({
        next:(res)=>{
            console.log(res);
              if (res.message === 'success') {
                this.store.dispatch(subjectsActions.setSubjects({AllSubs:res.subjects}))
              }
          //TODO : Dispatch setProducts
          // this.store.dispatch(subjectsActions.setSubjects({AllSubs:res}))
          // console.log({Allsubs:res});
          
        }
      })
    }


    //TODO listen To updated subjects from store 


    getAllSubjects():void{
    this.subjectList$= this.store.select(subjectsSelctors.selectAllSubjects)
      this.getAll=0
       console.log(this.subjectList$);
       
    }

    clickTogetAll():void{
    
      this.getAllsubjectList$= this.store.select(subjectsSelctors.selectAllSubjects)
        this.getAll=1
    }





}
