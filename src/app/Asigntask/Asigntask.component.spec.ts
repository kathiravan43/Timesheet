/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsigntaskComponent } from './Asigntask.component';

describe('AsigntaskComponent', () => {
  let component: AsigntaskComponent;
  let fixture: ComponentFixture<AsigntaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigntaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigntaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
