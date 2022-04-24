import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDiscussionListComponent } from './dashboard-discussion-list.component';

describe('DashboardDiscussionListComponent', () => {
  let component: DashboardDiscussionListComponent;
  let fixture: ComponentFixture<DashboardDiscussionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDiscussionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDiscussionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
