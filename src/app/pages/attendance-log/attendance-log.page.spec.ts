import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceLogPage } from './attendance-log.page';

describe('AttendanceLogPage', () => {
  let component: AttendanceLogPage;
  let fixture: ComponentFixture<AttendanceLogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
