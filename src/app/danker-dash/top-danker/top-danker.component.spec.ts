import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDankerComponent } from './top-danker.component';

describe('TopDankerComponent', () => {
  let component: TopDankerComponent;
  let fixture: ComponentFixture<TopDankerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDankerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
