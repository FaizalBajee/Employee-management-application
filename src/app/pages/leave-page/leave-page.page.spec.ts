import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeavePagePage } from './leave-page.page';

describe('LeavePagePage', () => {
  let component: LeavePagePage;
  let fixture: ComponentFixture<LeavePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
