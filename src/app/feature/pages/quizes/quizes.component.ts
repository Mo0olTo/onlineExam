import { Component, inject, OnInit } from '@angular/core';
import { ExamsService } from '../../../shared/services/Exams/exams.service';

@Component({
  selector: 'app-quizes',
  imports: [],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss'
})
export class QuizesComponent implements OnInit { 

  private readonly examsService=inject(ExamsService)

  ngOnInit(): void {
      
  }




}
