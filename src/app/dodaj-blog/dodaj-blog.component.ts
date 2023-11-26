import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-dodaj-blog',
  templateUrl: './dodaj-blog.component.html',
  styleUrls: ['./dodaj-blog.component.css']
})
export class DodajBlogComponent {
  sucessfulResponse: boolean = false;

  constructor(private apiService: HttpServiceService) {}

  ngAfterViewInit() {
    document.getElementById("myForm")?.addEventListener("submit", function(e) {
      if ((document.getElementById('myForm') as HTMLFormElement).checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      document.getElementById("myForm")?.classList.add("was-validated");
    });
  }

  createBlog(data: any) {
    let formData = new FormData();
    console.log(data)
    formData.append('image', data.image);
    formData.append('title', data.title);
    formData.append('content', data.textarea);

    this.apiService.newBlog('blog/posts', formData).subscribe({
      next: (data) => {
        this.sucessfulResponse = true;
      }
    });
  }
}
