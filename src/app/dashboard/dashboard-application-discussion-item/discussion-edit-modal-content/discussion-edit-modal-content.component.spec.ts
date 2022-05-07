import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionEditModalContentComponent } from './discussion-edit-modal-content.component';

describe('DiscussionEditModalContentComponent', () => {
  let component: DiscussionEditModalContentComponent;
  let fixture: ComponentFixture<DiscussionEditModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionEditModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionEditModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
