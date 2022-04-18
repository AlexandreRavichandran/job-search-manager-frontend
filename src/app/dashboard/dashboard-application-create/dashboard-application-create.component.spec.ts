import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationCreateComponent } from './dashboard-application-create.component';

describe('DashboardApplicationCreateComponent', () => {
  let component: DashboardApplicationCreateComponent;
  let fixture: ComponentFixture<DashboardApplicationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
