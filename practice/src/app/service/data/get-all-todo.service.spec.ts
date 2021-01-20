import { TestBed } from '@angular/core/testing';

import { GetAllTodoService } from './get-all-todo.service';

describe('GetAllTodoService', () => {
  let service: GetAllTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
