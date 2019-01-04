import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThmaComponent } from './thma.component';

describe('ThmaComponent', () => {
  let component: ThmaComponent;
  let fixture: ComponentFixture<ThmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
