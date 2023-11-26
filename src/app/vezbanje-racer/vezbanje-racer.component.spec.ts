import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezbanjeRacerComponent } from './vezbanje-racer.component';

describe('VezbanjeRacerComponent', () => {
  let component: VezbanjeRacerComponent;
  let fixture: ComponentFixture<VezbanjeRacerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VezbanjeRacerComponent]
    });
    fixture = TestBed.createComponent(VezbanjeRacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
