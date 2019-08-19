import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroListaPage } from './carro-lista.page';

describe('CarroListaPage', () => {
  let component: CarroListaPage;
  let fixture: ComponentFixture<CarroListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
