import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema19Component } from './tema19.component';

describe('Tema19Component', () => {
  let component: Tema19Component;
  let fixture: ComponentFixture<Tema19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
