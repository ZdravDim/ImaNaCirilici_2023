import { Component } from '@angular/core';

@Component({
  selector: 'app-resursi',
  templateUrl: './resursi.component.html',
  styleUrls: ['./resursi.component.css']
})
export class ResursiComponent {
  downloadZip(filePath: string): void {
    //const filePath = "serbian-language-tools-master.zip";
    const url = `http://localhost:8080/api/zip/downloadZip/${filePath}`;


    fetch(url)
        .then(response => {
          if (!response.ok) {
            console.log("error");
          }
          return response.blob();
        })
        .then(blob => {
          const a = document.createElement('a');
          const url = window.URL.createObjectURL(blob);

          a.href = url;
          a.download = filePath;

          document.body.appendChild(a);
          a.click();

          document.body.removeChild(a);
        })
        .catch(error => console.error('Грешка приликом преузиманја ЗИП фајла:', error));
  }
}
