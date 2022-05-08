import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationApplyModalContentComponent } from './application-apply-modal-content.component';

describe('ApplicationApplyModalContentComponent', () => {
  let component: ApplicationApplyModalContentComponent;
  let fixture: ComponentFixture<ApplicationApplyModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationApplyModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationApplyModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
