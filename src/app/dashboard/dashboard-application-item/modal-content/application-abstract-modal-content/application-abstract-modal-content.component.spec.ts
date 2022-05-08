import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAbstractModalContentComponent } from './application-abstract-modal-content.component';

describe('ApplicationAbstractModalContentComponent', () => {
  let component: ApplicationAbstractModalContentComponent;
  let fixture: ComponentFixture<ApplicationAbstractModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAbstractModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAbstractModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
