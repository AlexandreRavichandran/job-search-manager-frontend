import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationEditFormComponent } from './dashboard-application-edit-form.component';

describe('DashboardApplicationEditFormComponent', () => {
  let component: DashboardApplicationEditFormComponent;
  let fixture: ComponentFixture<DashboardApplicationEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
