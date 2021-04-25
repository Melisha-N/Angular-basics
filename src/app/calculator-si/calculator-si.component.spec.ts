import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSIComponent } from './calculator-si.component';

describe('CalculatorSIComponent', () => {
  let component: CalculatorSIComponent;
  let fixture: ComponentFixture<CalculatorSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorSIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
