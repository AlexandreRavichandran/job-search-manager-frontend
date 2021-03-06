import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubHeaderComponent } from './dashboard-sub-header.component';

describe('DashboardSubHeaderComponent', () => {
  let component: DashboardSubHeaderComponent;
  let fixture: ComponentFixture<DashboardSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSubHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
