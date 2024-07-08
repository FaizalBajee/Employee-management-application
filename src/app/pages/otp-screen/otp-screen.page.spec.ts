import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtpScreenPage } from './otp-screen.page';

describe('OtpScreenPage', () => {
  let component: OtpScreenPage;
  let fixture: ComponentFixture<OtpScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
