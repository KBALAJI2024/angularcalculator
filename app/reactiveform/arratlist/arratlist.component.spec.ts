import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArratlistComponent } from './arratlist.component';

describe('ArratlistComponent', () => {
  let component: ArratlistComponent;
  let fixture: ComponentFixture<ArratlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArratlistComponent]
    });
    fixture = TestBed.createComponent(ArratlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
