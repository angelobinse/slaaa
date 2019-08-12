import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPage } from './tela.page';

describe('TelaPage', () => {
  let component: TelaPage;
  let fixture: ComponentFixture<TelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
