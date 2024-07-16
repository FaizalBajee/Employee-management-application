import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprovePermissionPage } from './approve-permission.page';

describe('ApprovePermissionPage', () => {
  let component: ApprovePermissionPage;
  let fixture: ComponentFixture<ApprovePermissionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
