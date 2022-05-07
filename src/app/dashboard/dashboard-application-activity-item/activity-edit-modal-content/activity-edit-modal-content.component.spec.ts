import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEditModalContentComponent } from './activity-edit-modal-content.component';

describe('ActivityEditModalContentComponent', () => {
  let component: ActivityEditModalContentComponent;
  let fixture: ComponentFixture<ActivityEditModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityEditModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEditModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
