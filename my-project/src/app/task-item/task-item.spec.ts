import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItem } from './task-item';

describe('TaskItem', () => {
  let component: TaskItem;
  let fixture: ComponentFixture<TaskItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
