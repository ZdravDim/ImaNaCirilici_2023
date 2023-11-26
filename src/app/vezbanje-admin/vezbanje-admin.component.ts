import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-vezbanje-admin',
  templateUrl: './vezbanje-admin.component.html',
  styleUrls: ['./vezbanje-admin.component.css']
})
export class VezbanjeAdminComponent {
  constructor(private apiService: HttpServiceService) {}
  
  dodajTekst(tekst: string) : void {
    this.apiService.post('vezba/dodajTekst', {text: tekst}).subscribe({
      next: (data) => {

      },
      error: (err) => {
        alert(err.message);
      }
    });
  }
}
