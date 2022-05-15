import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArchivedComponent } from './dashboard-archived.component';

describe('DashboardArchivedComponent', () => {
  let component: DashboardArchivedComponent;
  let fixture: ComponentFixture<DashboardArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
