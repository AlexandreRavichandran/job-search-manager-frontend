import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMoveModalContentComponent } from './application-move-modal-content.component';

describe('ApplicationMoveModalContentComponent', () => {
  let component: ApplicationMoveModalContentComponent;
  let fixture: ComponentFixture<ApplicationMoveModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationMoveModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMoveModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
