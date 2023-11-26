import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransliteratorOnlineComponent } from './transliterator-online.component';

describe('TransliteratorOnlineComponent', () => {
  let component: TransliteratorOnlineComponent;
  let fixture: ComponentFixture<TransliteratorOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransliteratorOnlineComponent]
    });
    fixture = TestBed.createComponent(TransliteratorOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
