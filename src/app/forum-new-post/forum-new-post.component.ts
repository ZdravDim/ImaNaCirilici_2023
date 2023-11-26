import { Component } from '@angular/core';

@Component({
  selector: 'app-forum-new-post',
  templateUrl: './forum-new-post.component.html',
  styleUrls: ['./forum-new-post.component.css']
})
export class ForumNewPostComponent {
  postTitle: HTMLTextAreaElement | null = null;
  postContent: HTMLTextAreaElement | null = null;
  obrisiBtn: HTMLElement | null = null;
  postujBtn: HTMLElement | null = null;

  obrisi() {
    this.postTitle = document.getElementById("PostTitle");
    this.postContent = document.getElementById("PostContent");

    if (this.postTitle) this.postTitle.value = "";
    if (this.postContent) this.postContent.value = "";
  }
}
