import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoodItemListComponent } from './admin-food-item-list.component';

describe('AdminFoodItemListComponent', () => {
  let component: AdminFoodItemListComponent;
  let fixture: ComponentFixture<AdminFoodItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFoodItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFoodItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
