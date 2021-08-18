import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkwookieComponent } from './milkwookie.component';

describe('MilkwookieComponent', () => {
  let component: MilkwookieComponent;
  let fixture: ComponentFixture<MilkwookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkwookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkwookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
