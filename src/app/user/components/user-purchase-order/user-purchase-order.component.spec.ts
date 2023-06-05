import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchaseOrderComponent } from './user-purchase-order.component';

describe('UserPurchaseOrderComponent', () => {
  let component: UserPurchaseOrderComponent;
  let fixture: ComponentFixture<UserPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
