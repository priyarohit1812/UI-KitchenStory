import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoodItemComponent } from './user-food-item.component';

describe('UserFoodItemComponent', () => {
  let component: UserFoodItemComponent;
  let fixture: ComponentFixture<UserFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFoodItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
