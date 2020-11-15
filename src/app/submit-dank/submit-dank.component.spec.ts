import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDankComponent } from './submit-dank.component';

describe('SubmitDankComponent', () => {
  let component: SubmitDankComponent;
  let fixture: ComponentFixture<SubmitDankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitDankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitDankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
