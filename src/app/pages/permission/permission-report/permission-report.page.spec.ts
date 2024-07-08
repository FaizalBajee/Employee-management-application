import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionReportPage } from './permission-report.page';

describe('PermissionReportPage', () => {
  let component: PermissionReportPage;
  let fixture: ComponentFixture<PermissionReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
