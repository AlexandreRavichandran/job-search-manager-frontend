import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationDiscussionItemComponent } from './dashboard-application-discussion-item.component';

describe('DashboardApplicationDiscussionItemComponent', () => {
  let component: DashboardApplicationDiscussionItemComponent;
  let fixture: ComponentFixture<DashboardApplicationDiscussionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationDiscussionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationDiscussionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
