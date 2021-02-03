import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema9Component } from './tema9.component';

describe('Tema9Component', () => {
  let component: Tema9Component;
  let fixture: ComponentFixture<Tema9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
