import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema16Component } from './tema16.component';

describe('Tema16Component', () => {
  let component: Tema16Component;
  let fixture: ComponentFixture<Tema16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
