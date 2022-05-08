import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFailedModalContentComponent } from './application-failed-modal-content.component';

describe('ApplicationFailedModalContentComponent', () => {
  let component: ApplicationFailedModalContentComponent;
  let fixture: ComponentFixture<ApplicationFailedModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFailedModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFailedModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
