import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ExamsService } from '../../../shared/services/Exams/exams.service';
import { Store } from '@ngrx/store';
import* as examsActions from './../../../store/Exams/exams.actions'
import* as examsSelectors from '../../../store/Exams/exams.selectors'
import { Exam } from '../../../store/Exams/exams.modal';
import { Observable } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-all-exams',
  imports: [AsyncPipe],
  templateUrl: './all-exams.component.html',
  styleUrl: './all-exams.component.scss'
})
export class AllExamsComponent implements OnInit , AfterViewInit {



   private readonly plat_id=inject(PLATFORM_ID) 
  private readonly flowbiteService=inject(FlowbiteService);
  private readonly examsService=inject(ExamsService)
  private readonly store=inject(Store)
  private readonly router=inject(Router)


    examsList$!:Observable<Exam[]>

    


    

  ngAfterViewInit(): void {

       if (isPlatformBrowser(this.plat_id)) {
      this.flowbiteService.loadFlowbite((flowbite)=>{})
            initFlowbite();
    }
  }
  ngOnInit(): void {

    this.loadExams()
    this.getAllExams()
      
  }


 loadExams():void{
    this.examsService.getAllExams().subscribe({
      next:(res)=>{
       if(res.message === "success"){
        this.store.dispatch(examsActions.setExams({AllExams:res.exams}))
       }
        
        

        
      }
    })
  }



  getAllExams():void{
    this.examsList$ = this.store.select(examsSelectors.selectAllExams)
    
    
    console.log(this.examsList$);
    
  }

  

  startExam(id:string|null):void{
    this.examsService.getExamById(id).subscribe({
      next:(res)=>{
        console.log(res , 'examid');
        if (res.message === 'success'){

          this.router.navigate
          
        }
        
      }
    })
    
  }

  



}
