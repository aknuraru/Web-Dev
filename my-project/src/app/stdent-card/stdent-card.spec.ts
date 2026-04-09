import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdentCard } from './stdent-card';

describe('StdentCard', () => {
  let component: StdentCard;
  let fixture: ComponentFixture<StdentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdentCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdentCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
