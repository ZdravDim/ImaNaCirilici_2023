import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-dodaj-blog',
  templateUrl: './dodaj-blog.component.html',
  styleUrls: ['./dodaj-blog.component.css']
})
export class DodajBlogComponent {
  sucessfulResponse: boolean = false;
  selectedFile: any;
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

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  createBlog(data: any) {
    let formData = new FormData();
    console.log(data)
    formData.append('image', this.selectedFile, this.selectedFile.name);
    formData.append('title', data.title);
    formData.append('content', data.textarea);

    this.apiService.newBlog('blog/posts', formData).subscribe({
      next: (data) => {
        this.sucessfulResponse = true;
      }
    });
  }
}
