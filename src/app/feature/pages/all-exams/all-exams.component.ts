

import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ExamsService } from '../../../shared/services/Exams/exams.service';
import { Store } from '@ngrx/store';
import* as examsActions from './../../../store/Exams/exams.actions'
import* as examsSelectors from '../../../store/Exams/exams.selectors'
import { Exam } from '../../../store/Exams/exams.modal';
import { map, Observable } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';

import* as QuestActions from "./../../../store/questions/questions.actions"
import* as QuestSelectors from "./../../../store/questions/questions.selectors"


import* as AnswersActions from "./../../../store/Answers/answers.actions"
import* as AnswersSelectors from "./../../../store/Answers/answers.selectors"

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';
import { Answer, Question, Questions } from '../../../shared/interfaces/questions';
import { SelectedAnswers } from '../../../shared/interfaces/selected-answers';

@Component({
  selector: 'app-all-exams',
  imports: [AsyncPipe,Dialog, ButtonModule, InputTextModule,StepperModule],
  templateUrl: './all-exams.component.html',
  styleUrl: './all-exams.component.scss' ,
    encapsulation: ViewEncapsulation.None
})
export class AllExamsComponent implements OnInit , AfterViewInit {



   private readonly plat_id=inject(PLATFORM_ID) 
  private readonly flowbiteService=inject(FlowbiteService);
  private readonly examsService=inject(ExamsService)
  private readonly store=inject(Store)
  private readonly router=inject(Router)
  private readonly activatedRoute=inject(ActivatedRoute)


    examsList$!:Observable<Exam[]>


    QuestionsList$!:Observable<Questions>


    questionsArray!:Question[]

    
    answersList$!:Observable<Answer[]>
     answersArray:Answer[]=[]


      examId!:any
      finalScore:number=0
    
    selectedAnswers: SelectedAnswers[] = []





    

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

  

  startExam(id:string):void{
    this.examsService.getExamById(id).subscribe({
      next:(res)=>{
        console.log(res , 'examid');
        
        this.examId=res.exam._id
        
        this.LoadQuestions()
       
      }
    })

  }


//Questions in store 
  LoadQuestions():void{
    this.examsService.getExamQuestions(this.examId).subscribe({
      next:(res)=>{
        console.log(res , "questions"); 

        this.store.dispatch(QuestActions.setQuestions({AllQuestions:res}))
          this.getAllQuestions()
         

      }
    })
  } 

  getAllQuestions():void{
    this.QuestionsList$ = this.store.select(QuestSelectors.selectAllquestions)

    this.store.select(QuestSelectors.selectAllquestions).subscribe(res=>
      this.questionsArray = res.questions
     )

      
   

    console.log(this.QuestionsList$ , "Questions List Here");

  }


//Answers in store 
  loadAnswer():void{
    this.examsService.getExamAnswers(this.examId).subscribe({
      next:(res)=>{
      

        const allAnswers = res.questions.flatMap(q => q.answers);
        this.store.dispatch(AnswersActions.setAnswers({AllAnswers:allAnswers}))
       
        this.setAnswers()
      } 
    })

  }

  setAnswers():void{
    this.answersList$ = this.store.select(AnswersSelectors.selectAllAnswers)

      

      this.store.select(AnswersSelectors.selectAllAnswers).subscribe(res=>{
        
        this.answersArray =res
       
        
    
        
  
  })

   
    
  }






  // save Selectedf Answers 

    onAnswerQuestion(questionId:string , answerKey:string):void{

      const existAnswer = this.selectedAnswers.find((c)=> c.questionId === questionId)

      if(existAnswer){
        existAnswer.answerKey = answerKey 
      } else {
        this.selectedAnswers.push({questionId , answerKey})
        console.log(this.selectedAnswers);
      }
           

       this.store.dispatch(AnswersActions.setUserAnswers({ answers: [...this.selectedAnswers] }));



           if(this.selectedAnswers.length ===this.questionsArray.length){
            const score = this.calculateResults(this.questionsArray , this.selectedAnswers)
              this.finalScore=score

           }
          
           
             
    }


    calculateResults(questions:Question[] , userAnswers:SelectedAnswers[]):number{

      let finalScore = 0

      userAnswers.forEach(answers=>{
        const question =questions.find(q=>q._id === answers.questionId)

        if(question && question.correct === answers.answerKey){

          finalScore++;
        }
      })
         console.log("Final Score:", finalScore);
      return finalScore;
    }


    submitExam(): void {

  this.store.select(AnswersSelectors.selectUserAnswers).subscribe(answers => {
    const score = this.calculateResults(this.questionsArray, answers);
    console.log("Final Score:", score);
    this.finalScore = score;
  });
}

    // PRIME Ng functions 
  
    visible: boolean = false;
    show:boolean =false;


    showDialog() {
        this.visible = true;
    }

   showExam(){
    this.visible=false
      this.show = true
   }

}
