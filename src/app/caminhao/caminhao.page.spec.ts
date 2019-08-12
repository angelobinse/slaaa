import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhaoPage } from './caminhao.page';

describe('CaminhaoPage', () => {
  let component: CaminhaoPage;
  let fixture: ComponentFixture<CaminhaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
