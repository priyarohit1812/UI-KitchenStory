import { TestBed } from '@angular/core/testing';

import { UserFoodItemService } from './user-food-item.service';

describe('UserFoodItemService', () => {
  let service: UserFoodItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFoodItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
