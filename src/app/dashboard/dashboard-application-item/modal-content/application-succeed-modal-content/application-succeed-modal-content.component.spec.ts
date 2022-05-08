import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSucceedModalContentComponent } from './application-succeed-modal-content.component';

describe('ApplicationSucceedModalContentComponent', () => {
  let component: ApplicationSucceedModalContentComponent;
  let fixture: ComponentFixture<ApplicationSucceedModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationSucceedModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSucceedModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
