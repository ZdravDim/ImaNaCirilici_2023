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
    this.apiService.post('blog/posts', data).subscribe({
      next: (data) => {
        this.sucessfulResponse = true;
      }
    });
  }
}
