import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationNoteListComponent } from './dashboard-application-note-list.component';

describe('DashboardApplicationNoteListComponent', () => {
  let component: DashboardApplicationNoteListComponent;
  let fixture: ComponentFixture<DashboardApplicationNoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationNoteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
