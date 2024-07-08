import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyPermissionPage } from './apply-permission.page';

describe('ApplyPermissionPage', () => {
  let component: ApplyPermissionPage;
  let fixture: ComponentFixture<ApplyPermissionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
