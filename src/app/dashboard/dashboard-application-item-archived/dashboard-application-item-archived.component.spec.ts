import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationItemArchivedComponent } from './dashboard-application-item-archived.component';

describe('DashboardApplicationItemArchivedComponent', () => {
  let component: DashboardApplicationItemArchivedComponent;
  let fixture: ComponentFixture<DashboardApplicationItemArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationItemArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationItemArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
