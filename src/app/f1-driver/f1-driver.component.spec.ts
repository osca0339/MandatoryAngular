import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1DriverComponent } from './f1-driver.component';

describe('F1DriverComponent', () => {
  let component: F1DriverComponent;
  let fixture: ComponentFixture<F1DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1DriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F1DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
