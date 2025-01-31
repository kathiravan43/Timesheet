/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HolidaysComponent } from './Holidays.component';

describe('HolidaysComponent', () => {
  let component: HolidaysComponent;
  let fixture: ComponentFixture<HolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
