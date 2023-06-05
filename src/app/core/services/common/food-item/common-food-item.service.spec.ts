import { TestBed } from '@angular/core/testing';

import { CommonFoodItemService } from './common-food-item.service';

describe('CommonFoodItemService', () => {
  let service: CommonFoodItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonFoodItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
