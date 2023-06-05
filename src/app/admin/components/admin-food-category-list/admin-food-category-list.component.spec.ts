import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoodCategoryListComponent } from './admin-food-category-list.component';

describe('AdminFoodCategoryListComponent', () => {
  let component: AdminFoodCategoryListComponent;
  let fixture: ComponentFixture<AdminFoodCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFoodCategoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFoodCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
