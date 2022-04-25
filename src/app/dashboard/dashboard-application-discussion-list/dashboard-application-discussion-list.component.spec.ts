import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationDiscussionListComponent } from './dashboard-application-discussion-list.component';

describe('DashboardApplicationDiscussionListComponent', () => {
  let component: DashboardApplicationDiscussionListComponent;
  let fixture: ComponentFixture<DashboardApplicationDiscussionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationDiscussionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationDiscussionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
