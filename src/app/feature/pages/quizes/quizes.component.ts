import { Component, inject, OnInit } from '@angular/core';
import { ExamsService } from '../../../shared/services/Exams/exams.service';
import { AllExamsComponent } from "../all-exams/all-exams.component";

@Component({
  selector: 'app-quizes',
  imports: [AllExamsComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss'
})
export class QuizesComponent implements OnInit { 

  private readonly examsService=inject(ExamsService)

  ngOnInit(): void {
      
  }




}
