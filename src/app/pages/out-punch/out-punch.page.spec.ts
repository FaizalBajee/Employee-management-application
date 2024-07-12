import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutPunchPage } from './out-punch.page';

describe('OutPunchPage', () => {
  let component: OutPunchPage;
  let fixture: ComponentFixture<OutPunchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
