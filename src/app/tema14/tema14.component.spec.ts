import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema14Component } from './tema14.component';

describe('Tema14Component', () => {
  let component: Tema14Component;
  let fixture: ComponentFixture<Tema14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
