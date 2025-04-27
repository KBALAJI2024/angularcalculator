import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayeditComponent } from './arrayedit.component';

describe('ArrayeditComponent', () => {
  let component: ArrayeditComponent;
  let fixture: ComponentFixture<ArrayeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayeditComponent]
    });
    fixture = TestBed.createComponent(ArrayeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
