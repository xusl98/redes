import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema13Component } from './tema13.component';

describe('Tema13Component', () => {
  let component: Tema13Component;
  let fixture: ComponentFixture<Tema13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
