import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogArray: any;

  constructor(private apiService: HttpServiceService) {
    apiService.get('blog/posts').subscribe({
      next: (data) => {
        this.blogArray = data['content'];
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }
}
