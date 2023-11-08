/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainAlbumsongcoverComponent } from './main-albumsongcover.component';

describe('MainAlbumsongcoverComponent', () => {
  let component: MainAlbumsongcoverComponent;
  let fixture: ComponentFixture<MainAlbumsongcoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAlbumsongcoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAlbumsongcoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
