import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-transliterator-online',
  templateUrl: './transliterator-online.component.html',
  styleUrls: ['./transliterator-online.component.css']
})
export class TransliteratorOnlineComponent {

  constructor(private apiService: HttpServiceService) {
    
  }

  translate(data: any) {
    let outputElement = document.getElementById('outputText') as HTMLSelectElement;
    let selectElement = document.getElementById('transliterationType') as HTMLSelectElement;
    let selectedIndex = selectElement.selectedIndex;

    if (selectedIndex) {
      this.apiService.post('transliteration/to-cyrillic', {text: data.text}).subscribe({
        next: (data) => {
          let returnValue = '';
          data['data'].forEach((element: string[]) => {
            returnValue += element[0] + ' ';
          });
          outputElement.value = returnValue.slice(0, -1);
        }
      });
    }
    else {
      this.apiService.post('transliteration/to-latin', {text: data.text}).subscribe({
        next: (data) => {
          let returnValue = '';
          data['data'].forEach((element: string[]) => {
            returnValue += element[0] + ' ';
          });
          outputElement.value = returnValue.slice(0, -1);
        }
      });
    }
  }
}
