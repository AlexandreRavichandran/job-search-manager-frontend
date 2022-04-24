import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationReadComponent } from './dashboard-application-read.component';

describe('DashboardApplicationReadComponent', () => {
  let component: DashboardApplicationReadComponent;
  let fixture: ComponentFixture<DashboardApplicationReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
