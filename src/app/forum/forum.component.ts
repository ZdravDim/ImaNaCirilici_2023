import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  postTitle: HTMLTextAreaElement | null = null;
  postContent: HTMLTextAreaElement | null = null;
  obrisiBtn: HTMLElement | null = null;
  postujBtn: HTMLElement | null = null;
  forumArray: any;
  
  constructor(private apiService: HttpServiceService, private activeRoute: ActivatedRoute, private router: Router) {
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

  obrisi() {
    this.postTitle = document.getElementById("PostTitle") as HTMLTextAreaElement;
    this.postContent = document.getElementById("PostContent") as HTMLTextAreaElement;

    if (this.postTitle) this.postTitle.value = "";
    if (this.postContent) this.postContent.value = "";
  }
  addPost(postData: any) {
    if (localStorage.getItem('accessToken')) {
      this.apiService.post('forum/posts', {
        title: postData.title,
        content: postData.content
      }).subscribe({
        next: (data) => {
          document.location.reload();
        },
        error: (err) => {
          alert(err.message);
        }
      });
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
