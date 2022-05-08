import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationArchiveModalContentComponent } from './application-archive-modal-content.component';

describe('ApplicationArchiveModalContentComponent', () => {
  let component: ApplicationArchiveModalContentComponent;
  let fixture: ComponentFixture<ApplicationArchiveModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationArchiveModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationArchiveModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
