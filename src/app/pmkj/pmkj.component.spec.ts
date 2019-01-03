import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmkjComponent } from './pmkj.component';

describe('PmkjComponent', () => {
  let component: PmkjComponent;
  let fixture: ComponentFixture<PmkjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmkjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmkjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
