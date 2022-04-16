import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActivitySectionComponent } from './dashboard-activity-section.component';

describe('DashboardActivitySectionComponent', () => {
  let component: DashboardActivitySectionComponent;
  let fixture: ComponentFixture<DashboardActivitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActivitySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActivitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
