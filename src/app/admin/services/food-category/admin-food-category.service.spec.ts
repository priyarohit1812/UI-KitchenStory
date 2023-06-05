import { TestBed } from '@angular/core/testing';

import { AdminFoodCategoryService } from './admin-food-category.service';

describe('AdminFoodCategoryService', () => {
  let service: AdminFoodCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminFoodCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
