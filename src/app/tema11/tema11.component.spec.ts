import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema11Component } from './tema11.component';

describe('Tema11Component', () => {
  let component: Tema11Component;
  let fixture: ComponentFixture<Tema11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
