import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema8Component } from './tema8.component';

describe('Tema8Component', () => {
  let component: Tema8Component;
  let fixture: ComponentFixture<Tema8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
