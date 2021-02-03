import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema17Component } from './tema17.component';

describe('Tema17Component', () => {
  let component: Tema17Component;
  let fixture: ComponentFixture<Tema17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
