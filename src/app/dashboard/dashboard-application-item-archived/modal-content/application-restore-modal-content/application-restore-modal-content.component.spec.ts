import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRestoreModalContentComponent } from './application-restore-modal-content.component';

describe('ApplicationRestoreModalContentComponent', () => {
  let component: ApplicationRestoreModalContentComponent;
  let fixture: ComponentFixture<ApplicationRestoreModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationRestoreModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationRestoreModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
