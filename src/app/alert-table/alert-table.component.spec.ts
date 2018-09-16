
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTableComponent } from './alert-table.component';

describe('AlertTableComponent', () => {
  let component: AlertTableComponent;
  let fixture: ComponentFixture<AlertTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
