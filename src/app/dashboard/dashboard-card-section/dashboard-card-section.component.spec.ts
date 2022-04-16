import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardSectionComponent } from './dashboard-card-section.component';

describe('DashboardCardSectionComponent', () => {
  let component: DashboardCardSectionComponent;
  let fixture: ComponentFixture<DashboardCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCardSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
