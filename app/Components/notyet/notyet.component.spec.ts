import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotyetComponent } from './notyet.component';

describe('NotyetComponent', () => {
  let component: NotyetComponent;
  let fixture: ComponentFixture<NotyetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotyetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
