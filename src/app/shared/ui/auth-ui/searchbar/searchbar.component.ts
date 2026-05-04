import { Component, inject, OnInit, signal, computed, effect, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Exam } from '../../../../store/Exams/exams.modal';
import * as examsSelectors from './../../../../store/Exams/exams.selectors';

@Component({
  selector: 'app-searchbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  // Input signals
  searchQuery = input<string>('');

  // Internal signals
  private searchQueryInternal = signal<string>('');
  private allExams = signal<Exam[]>([]);
  private showDropdown = signal<boolean>(false);

  // Output events
  onExamSelected = output<Exam>();

  // Computed signals
  filteredExams = computed(() => {
    const query = this.searchQueryInternal().toLowerCase().trim();
    if (!query) return [];
    
    return this.allExams().filter((exam) =>
      exam.title.toLowerCase().includes(query) ||
      exam.subject.toLowerCase().includes(query)
    );
  });

  constructor() {
    // Effect to sync input signal with internal signal
    effect(() => {
      this.searchQueryInternal.set(this.searchQuery());
    });
  }

  ngOnInit(): void {
    // Subscribe to all exams from store
    this.store.select(examsSelectors.selectAllExams).subscribe((exams) => {
      this.allExams.set(exams);
    });
  }

  onSearchInput(): void {
    this.showDropdown.set(this.searchQueryInternal().trim().length > 0);
  }

  selectExam(exam: Exam): void {
    this.searchQueryInternal.set('');
    this.showDropdown.set(false);
    this.onExamSelected.emit(exam);
    // Navigate to the exam quiz page
    this.router.navigate(['/quizes', exam._id]);
  }

  onSearchFocus(): void {
    if (this.searchQueryInternal().trim().length > 0) {
      this.showDropdown.set(true);
    }
  }

  onSearchBlur(): void {
    // Delay to allow click on dropdown items
    setTimeout(() => {
      this.showDropdown.set(false);
    }, 200);
  }

  // Getters for template
  get searchQueryValue(): string {
    return this.searchQueryInternal();
  }

  set searchQueryValue(value: string) {
    this.searchQueryInternal.set(value);
  }

  get showDropdownValue(): boolean {
    return this.showDropdown();
  }

  get filteredExamsValue(): Exam[] {
    return this.filteredExams();
  }
}
