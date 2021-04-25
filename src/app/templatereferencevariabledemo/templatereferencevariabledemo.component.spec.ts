import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferencevariabledemoComponent } from './templatereferencevariabledemo.component';

describe('TemplatereferencevariabledemoComponent', () => {
  let component: TemplatereferencevariabledemoComponent;
  let fixture: ComponentFixture<TemplatereferencevariabledemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatereferencevariabledemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatereferencevariabledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
