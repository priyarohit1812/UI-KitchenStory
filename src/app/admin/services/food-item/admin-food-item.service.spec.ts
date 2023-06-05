import { TestBed } from '@angular/core/testing';

import { AdminFoodItemService } from './admin-food-item.service';

describe('AdminFoodItemService', () => {
  let service: AdminFoodItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminFoodItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
