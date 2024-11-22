/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainerListComponent } from './trainer-list.component';

describe('TrainerListComponent', () => {
  let component: TrainerListComponent;
  let fixture: ComponentFixture<TrainerListComponent>;

  

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
