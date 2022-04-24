import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDiscussionItemComponent } from './dashboard-discussion-item.component';

describe('DashboardDiscussionItemComponent', () => {
  let component: DashboardDiscussionItemComponent;
  let fixture: ComponentFixture<DashboardDiscussionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDiscussionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDiscussionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
