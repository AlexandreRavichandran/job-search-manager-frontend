import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationListComponent } from './dashboard-application-list.component';

describe('DashboardApplicationListComponent', () => {
  let component: DashboardApplicationListComponent;
  let fixture: ComponentFixture<DashboardApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
