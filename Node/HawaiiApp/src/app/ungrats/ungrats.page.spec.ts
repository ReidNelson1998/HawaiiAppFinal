import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UngratsPage } from './ungrats.page';

describe('UngratsPage', () => {
  let component: UngratsPage;
  let fixture: ComponentFixture<UngratsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UngratsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UngratsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
