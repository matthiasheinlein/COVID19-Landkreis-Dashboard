import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InzidenzAverageAllComponent } from './inzidenz-average-all.component';

describe('InzidenzAverageAllComponent', () => {
  let component: InzidenzAverageAllComponent;
  let fixture: ComponentFixture<InzidenzAverageAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InzidenzAverageAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InzidenzAverageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
