import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationItemMessageComponent } from './dashboard-application-item-message.component';

describe('DashboardApplicationItemMessageComponent', () => {
  let component: DashboardApplicationItemMessageComponent;
  let fixture: ComponentFixture<DashboardApplicationItemMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationItemMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationItemMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
