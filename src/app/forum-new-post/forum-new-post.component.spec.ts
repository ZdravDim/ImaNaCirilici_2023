import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNewPostComponent } from './forum-new-post.component';

describe('ForumNewPostComponent', () => {
  let component: ForumNewPostComponent;
  let fixture: ComponentFixture<ForumNewPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumNewPostComponent]
    });
    fixture = TestBed.createComponent(ForumNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
