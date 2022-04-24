import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationActivityListComponent } from './dashboard-application-activity-list.component';

describe('DashboardApplicationActivityListComponent', () => {
  let component: DashboardApplicationActivityListComponent;
  let fixture: ComponentFixture<DashboardApplicationActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationActivityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
