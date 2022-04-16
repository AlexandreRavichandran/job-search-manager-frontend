import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActivityItemComponent } from './dashboard-activity-item.component';

describe('DashboardActivityItemComponent', () => {
  let component: DashboardActivityItemComponent;
  let fixture: ComponentFixture<DashboardActivityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActivityItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActivityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
