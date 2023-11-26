import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezbanjeAdminComponent } from './vezbanje-admin.component';

describe('VezbanjeAdminComponent', () => {
  let component: VezbanjeAdminComponent;
  let fixture: ComponentFixture<VezbanjeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VezbanjeAdminComponent]
    });
    fixture = TestBed.createComponent(VezbanjeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
