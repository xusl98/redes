import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema15Component } from './tema15.component';

describe('Tema15Component', () => {
  let component: Tema15Component;
  let fixture: ComponentFixture<Tema15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
