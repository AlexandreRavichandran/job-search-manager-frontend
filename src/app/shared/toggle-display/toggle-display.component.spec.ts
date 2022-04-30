import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDisplayComponent } from './toggle-display.component';

describe('ToggleDisplayComponent', () => {
  let component: ToggleDisplayComponent;
  let fixture: ComponentFixture<ToggleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
