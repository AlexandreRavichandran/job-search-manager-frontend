import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicationNoteItemComponent } from './dashboard-application-note-item.component';

describe('DashboardApplicationNoteItemComponent', () => {
  let component: DashboardApplicationNoteItemComponent;
  let fixture: ComponentFixture<DashboardApplicationNoteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApplicationNoteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicationNoteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
