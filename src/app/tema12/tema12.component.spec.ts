import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema12Component } from './tema12.component';

describe('Tema12Component', () => {
  let component: Tema12Component;
  let fixture: ComponentFixture<Tema12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
