import { TestBed } from '@angular/core/testing';

import { CommonFoodCategoryService } from './common-food-category.service';

describe('CommonFoodCategoryService', () => {
  let service: CommonFoodCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonFoodCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
