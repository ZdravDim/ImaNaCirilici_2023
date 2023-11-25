import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResursiComponent } from './resursi.component';

describe('ResursiComponent', () => {
  let component: ResursiComponent;
  let fixture: ComponentFixture<ResursiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResursiComponent]
    });
    fixture = TestBed.createComponent(ResursiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
