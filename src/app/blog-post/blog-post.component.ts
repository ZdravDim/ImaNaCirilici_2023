import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  blogData: any;

  constructor(private apiService: HttpServiceService, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(
      params => {
        let blogId = params['blogId'];

        apiService.get('...' + blogId).subscribe({
          next: (data) => {
            this.blogData = data;
          },
          error: (err) => {
            alert(err);
          }
        });
      }
    );
  }
}
