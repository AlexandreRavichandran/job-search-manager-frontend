import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDeleteModalContentComponent } from './application-delete-modal-content.component';

describe('ApplicationDeleteModalContentComponent', () => {
  let component: ApplicationDeleteModalContentComponent;
  let fixture: ComponentFixture<ApplicationDeleteModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDeleteModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDeleteModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
