import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageIndentRequestComponent } from './list-page-indent-request.component';

describe('ListPageIndentRequestComponent', () => {
  let component: ListPageIndentRequestComponent;
  let fixture: ComponentFixture<ListPageIndentRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPageIndentRequestComponent]
    });
    fixture = TestBed.createComponent(ListPageIndentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
