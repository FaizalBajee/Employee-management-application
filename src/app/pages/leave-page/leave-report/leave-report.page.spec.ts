import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveReportPage } from './leave-report.page';

describe('LeaveReportPage', () => {
  let component: LeaveReportPage;
  let fixture: ComponentFixture<LeaveReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
