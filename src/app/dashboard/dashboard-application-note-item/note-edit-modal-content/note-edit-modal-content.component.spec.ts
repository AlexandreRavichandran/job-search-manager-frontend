import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditModalContentComponent } from './note-edit-modal-content.component';

describe('NoteEditModalContentComponent', () => {
  let component: NoteEditModalContentComponent;
  let fixture: ComponentFixture<NoteEditModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEditModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
