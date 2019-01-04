import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmkjDetailsComponent } from './pmkj-details.component';

describe('PmkjDetailsComponent', () => {
  let component: PmkjDetailsComponent;
  let fixture: ComponentFixture<PmkjDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmkjDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmkjDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
