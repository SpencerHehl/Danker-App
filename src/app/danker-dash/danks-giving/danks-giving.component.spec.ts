import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanksGivingComponent } from './danks-giving.component';

describe('DanksGivingComponent', () => {
  let component: DanksGivingComponent;
  let fixture: ComponentFixture<DanksGivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanksGivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanksGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
