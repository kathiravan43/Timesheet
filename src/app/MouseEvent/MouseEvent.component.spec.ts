/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MouseEventComponent } from './MouseEvent.component';

describe('MouseEventComponent', () => {
  let component: MouseEventComponent;
  let fixture: ComponentFixture<MouseEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
