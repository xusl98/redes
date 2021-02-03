import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema10Component } from './tema10.component';

describe('Tema10Component', () => {
  let component: Tema10Component;
  let fixture: ComponentFixture<Tema10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
