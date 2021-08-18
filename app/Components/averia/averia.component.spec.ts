import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveriaComponent } from './averia.component';

describe('AveriaComponent', () => {
  let component: AveriaComponent;
  let fixture: ComponentFixture<AveriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AveriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
