import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBandaComponent } from './listar-banda.component';

describe('ListarBandaComponent', () => {
  let component: ListarBandaComponent;
  let fixture: ComponentFixture<ListarBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
