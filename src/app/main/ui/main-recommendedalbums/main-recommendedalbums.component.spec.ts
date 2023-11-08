/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainRecommendedalbumsComponent } from './main-recommendedalbums.component';

describe('MainRecommendedalbumsComponent', () => {
  let component: MainRecommendedalbumsComponent;
  let fixture: ComponentFixture<MainRecommendedalbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRecommendedalbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecommendedalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
