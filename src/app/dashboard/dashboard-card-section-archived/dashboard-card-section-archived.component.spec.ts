import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardSectionArchivedComponent } from './dashboard-card-section-archived.component';

describe('DashboardCardSectionArchivedComponent', () => {
  let component: DashboardCardSectionArchivedComponent;
  let fixture: ComponentFixture<DashboardCardSectionArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCardSectionArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSectionArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
