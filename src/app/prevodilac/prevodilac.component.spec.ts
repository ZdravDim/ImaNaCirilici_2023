import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevodilacComponent } from './prevodilac.component';

describe('PrevodilacComponent', () => {
  let component: PrevodilacComponent;
  let fixture: ComponentFixture<PrevodilacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevodilacComponent]
    });
    fixture = TestBed.createComponent(PrevodilacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
