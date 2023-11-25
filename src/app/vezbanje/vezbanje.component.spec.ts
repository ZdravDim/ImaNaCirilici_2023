import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezbanjeComponent } from './vezbanje.component';

describe('VezbanjeComponent', () => {
  let component: VezbanjeComponent;
  let fixture: ComponentFixture<VezbanjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VezbanjeComponent]
    });
    fixture = TestBed.createComponent(VezbanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
