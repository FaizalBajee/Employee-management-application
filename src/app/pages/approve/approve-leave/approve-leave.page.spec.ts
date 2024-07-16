import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproveLeavePage } from './approve-leave.page';

describe('ApproveLeavePage', () => {
  let component: ApproveLeavePage;
  let fixture: ComponentFixture<ApproveLeavePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveLeavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
