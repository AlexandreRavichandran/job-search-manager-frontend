import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationActivityItemComponent } from './dashboard-application-activity-item.component';

describe('DashboardApplicationActivityItemComponent', () => {
  let component: DashboardApplicationActivityItemComponent;
  let fixture: ComponentFixture<DashboardApplicationActivityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationActivityItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationActivityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
