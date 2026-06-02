import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacaoDePedidos } from './verificacao-de-pedidos';

describe('VerificacaoDePedidos', () => {
  let component: VerificacaoDePedidos;
  let fixture: ComponentFixture<VerificacaoDePedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacaoDePedidos],
    }).compileComponents();

    fixture = TestBed.createComponent(VerificacaoDePedidos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
