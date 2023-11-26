import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  constructor() {}
  comments: HTMLElement | null = null;
  showCommentsBtn: HTMLElement | null = null;
  commentsAreShown: boolean = true;

  showComments() {
    this.comments = document.getElementById("Comments");
    this.showCommentsBtn = document.getElementById("showComments");
    this.comments?.classList.toggle("hidden");
    if (this.commentsAreShown) {
      if (this.showCommentsBtn) this.showCommentsBtn.innerHTML = "Сакриј коментаре";
    } else {
      if (this.showCommentsBtn) this.showCommentsBtn.innerHTML = "Прикажи коментаре";
    }
    this.commentsAreShown = !this.commentsAreShown;
  }
}
