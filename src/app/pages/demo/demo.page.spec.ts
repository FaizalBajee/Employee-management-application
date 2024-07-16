import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DEMOPage } from './demo.page';

describe('DEMOPage', () => {
  let component: DEMOPage;
  let fixture: ComponentFixture<DEMOPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DEMOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
