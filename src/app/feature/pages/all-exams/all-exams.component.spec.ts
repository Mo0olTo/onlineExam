import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExamsComponent } from './all-exams.component';

describe('AllExamsComponent', () => {
  let component: AllExamsComponent;
  let fixture: ComponentFixture<AllExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
