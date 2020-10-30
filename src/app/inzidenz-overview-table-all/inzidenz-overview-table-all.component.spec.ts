import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InzidenzOverviewTableAllComponent } from './inzidenz-overview-table-all.component';

describe('InzidenzOverviewTableAllComponent', () => {
  let component: InzidenzOverviewTableAllComponent;
  let fixture: ComponentFixture<InzidenzOverviewTableAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InzidenzOverviewTableAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InzidenzOverviewTableAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
