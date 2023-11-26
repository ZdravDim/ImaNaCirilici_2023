import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-transliterator-online',
  templateUrl: './transliterator-online.component.html',
  styleUrls: ['./transliterator-online.component.css']
})
export class TransliteratorOnlineComponent {

  outputElement: HTMLSelectElement;

  constructor(private apiService: HttpServiceService) {
    this.outputElement = document.getElementById('transliterationType') as HTMLSelectElement;
  }

  translate(data: any) {
    let selectElement = document.getElementById('transliterationType') as HTMLSelectElement;
    let selectedIndex = selectElement.selectedIndex;

    if (selectedIndex) {
      this.apiService.post('transliteration/to-cyrillic', data.text).subscribe({
        next: (data) => {
          let returnValue = '';
          data['data'].forEach((element: string[]) => {
            returnValue += element[0] + ' ';
          });
          this.outputElement.innerHTML = returnValue.slice(0, -1);
        }
      });
    }
    else {
      this.apiService.post('transliteration/to-latin', data.text).subscribe({
        next: (data) => {
          let returnValue = '';
          data['data'].forEach((element: string[]) => {
            returnValue += element[0] + ' ';
          });
          this.outputElement.innerHTML = returnValue.slice(0, -1);
        }
      });
    }
  }
}
