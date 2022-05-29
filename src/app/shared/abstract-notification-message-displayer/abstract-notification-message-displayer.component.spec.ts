import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractNotificationMessageDisplayerComponent } from './abstract-notification-message-displayer.component';

describe('AbstractNotificationMessageDisplayerComponent', () => {
  let component: AbstractNotificationMessageDisplayerComponent;
  let fixture: ComponentFixture<AbstractNotificationMessageDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractNotificationMessageDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractNotificationMessageDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
