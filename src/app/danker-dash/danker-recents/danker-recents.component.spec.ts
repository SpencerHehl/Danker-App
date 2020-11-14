import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DankerRecentsComponent } from './danker-recents.component';

describe('DankerRecentsComponent', () => {
  let component: DankerRecentsComponent;
  let fixture: ComponentFixture<DankerRecentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DankerRecentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DankerRecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
