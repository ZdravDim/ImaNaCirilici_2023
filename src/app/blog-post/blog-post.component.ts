import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  blogData: any;
  formVisible:boolean = false;

  ngAfterViewInit() {
    document.getElementById("myForm")?.addEventListener("submit", function(e) {
      if ((document.getElementById('myForm') as HTMLFormElement).checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      document.getElementById("myForm")?.classList.add("was-validated");
    });
  }

  constructor(private apiService: HttpServiceService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.params.subscribe(
      params => {
        let blogId = params['blogId'];

        apiService.get('blog/posts/' + blogId).subscribe({
          next: (data) => {
            this.blogData = data;
          },
          error: (err) => {
            alert(err.message);
          }
        });
      }
    );
  }

  sendComment(commentData: any) {
    if (localStorage.getItem('accessToken')) {
      this.apiService.post('blog/posts/comment', {
        postId: this.blogData['id'], 
        content: commentData.comment
      }).subscribe({
        next: (data) => {
          this.blogData['comments'].unshift(data);
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
