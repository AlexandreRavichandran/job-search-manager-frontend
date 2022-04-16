import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationItemComponent } from './dashboard-application-item.component';

describe('DashboardApplicationItemComponent', () => {
  let component: DashboardApplicationItemComponent;
  let fixture: ComponentFixture<DashboardApplicationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
