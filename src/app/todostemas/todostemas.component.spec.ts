import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodostemasComponent } from './todostemas.component';

describe('TodostemasComponent', () => {
  let component: TodostemasComponent;
  let fixture: ComponentFixture<TodostemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodostemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodostemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
