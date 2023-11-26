import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forumArray: any;
  constructor(private apiService: HttpServiceService) {
    apiService.get('forum/posts').subscribe({
      next: (data) => {
        this.forumArray = data['content'];
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }
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

  sendComment(commentData: any, postId: number) {
    console.log(commentData)
    this.apiService.post('forum/posts/comment', {postId, content: commentData.text}).subscribe({
      next: (data) => {
        this.forumArray[postId]['comments'].unshift(data);
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }
}
