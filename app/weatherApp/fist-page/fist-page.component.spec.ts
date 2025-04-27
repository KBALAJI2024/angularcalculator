import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FistPageComponent } from './fist-page.component';

describe('FistPageComponent', () => {
  let component: FistPageComponent;
  let fixture: ComponentFixture<FistPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FistPageComponent]
    });
    fixture = TestBed.createComponent(FistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
