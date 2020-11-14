import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDankeeComponent } from './top-dankee.component';

describe('TopDankeeComponent', () => {
  let component: TopDankeeComponent;
  let fixture: ComponentFixture<TopDankeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDankeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDankeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
