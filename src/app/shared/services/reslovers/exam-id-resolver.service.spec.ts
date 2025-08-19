import { TestBed } from '@angular/core/testing';

import { ExamIdResolverService } from './exam-id-resolver.service';

describe('ExamIdResolverService', () => {
  let service: ExamIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
