import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajBlogComponent } from './dodaj-blog.component';

describe('DodajBlogComponent', () => {
  let component: DodajBlogComponent;
  let fixture: ComponentFixture<DodajBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodajBlogComponent]
    });
    fixture = TestBed.createComponent(DodajBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
