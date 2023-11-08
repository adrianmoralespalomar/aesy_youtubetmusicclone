/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainListenagainComponent } from './main-listenagain.component';

describe('MainListenagainComponent', () => {
  let component: MainListenagainComponent;
  let fixture: ComponentFixture<MainListenagainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListenagainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListenagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
