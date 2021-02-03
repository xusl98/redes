import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema18Component } from './tema18.component';

describe('Tema18Component', () => {
  let component: Tema18Component;
  let fixture: ComponentFixture<Tema18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
