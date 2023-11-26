import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-vezbanje-racer',
  templateUrl: './vezbanje-racer.component.html',
  styleUrls: ['./vezbanje-racer.component.css']
})
export class VezbanjeRacerComponent {
  apiText: string = '';

  constructor(private apiService: HttpServiceService) {}

  public characterSet = new Set(["љ", "њ", "е", "р", "т", "з", "у", "и", "о", "п", "ш", "ђ", "а", "с", "д", "ф",
    "г", "х", "ј", "к", "л", "ч", "ћ", "ж", "џ", "ц", "в", "б", "н", "м", "Љ", "Њ", "Е", "Р", "Т", "З", "У", "И", "О", "П", "Ш", "Ђ", "А", "С", "Д", "Ф",
    "Г", "Х", "Ј", "К", "Л", "Ч", "Ћ", "Ж", "Џ", "Ц", "В", "Б", "Н", "М", " ", ".", ",", "!", ";", ":", "q", "w", "e", "r", "t", "y", "u",
    "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U",
    "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "0", "1", "2", "3", "4", "5", "6",
    "7", "8", "9"]);

  public characterMap = new Map([
    ['љ', 'lj'], ['њ', 'nj'], ['е', 'e'], ['р', 'r'], ['т', 't'], ['з', 'z'], ['у', 'u'], ['и', 'i'], ['о', 'o'],
    ['п', 'p'], ['ш', 'sh'], ['ђ', 'dj'], ['а', 'a'], ['с', 's'], ['д', 'd'], ['ф', 'f'],
    ['г', 'g'], ['х', 'h'], ['ј', 'j'], ['к', 'k'], ['л', 'l'], ['ч', 'ch'], ['ћ', 'c'], ['ж', 'ž'], ['џ', 'dž'],
    ['ц', 'c'], ['в', 'v'], ['б', 'b'], ['н', 'n'], ['м', 'm'], ['Љ', 'Lj'], ['Њ', 'Nj'], ['Е', 'E'], ['Р', 'R'],
    ['Т', 'T'], ['З', 'Z'], ['У', 'U'], ['И', 'I'], ['О', 'O'], ['П', 'P'], ['Ш', 'Sh'], ['Ђ', 'Dj'], ['А', 'A'],
    ['С', 'S'], ['Д', 'D'], ['Ф', 'F'], ['Г', 'G'], ['Х', 'H'], ['Ј', 'J'], ['К', 'K'], ['Л', 'L'], ['Ч', 'Ch'],
    ['Ћ', 'C'], ['Ж', 'Ž'], ['Џ', 'Dž'], ['Ц', 'C'], ['В', 'V'], ['Б', 'B'], ['Н', 'N'], ['М', 'M'], [' ', ' ']
  ]);

  konvertuj_u_latinicu(cirilicniTekst: string): string {
    let latinicniTekst = '';

    for (let i = 0; i < cirilicniTekst.length; i++) {
      const karakter = cirilicniTekst.charAt(i);
      const konvertovaniKarakter = this.characterMap.get(karakter);

      if (konvertovaniKarakter) {
        latinicniTekst += konvertovaniKarakter;
      } else {
        latinicniTekst += karakter;
      }
    }

    return latinicniTekst;
  }

  ngOnInit() {
    this.getText();
  }

  getText() {
    this.apiService.get('api/vezba/nasumicni').subscribe({
      next: (data) => {
        this.apiText = data;
        this.pokreni();
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }

  pokreni() {
    const resetButton = document.getElementById("rstBtn");

    if (resetButton) {
      resetButton.style.visibility = "hidden";
    }

    let textLen: number = this.apiText.length;

    const text = this.konvertuj_u_latinicu(this.apiText);

    let textPrompt: HTMLElement | null = document.getElementById("TextPrompt");
    let textUser: HTMLElement | null = document.getElementById("TextUser");
    let timerDisplay: HTMLElement | null = document.getElementById("TimerDisplay");
    let brojGresaka: HTMLElement | null = document.getElementById("BrojGresaka");
    let i: number = 0;
    let numberOfErrors = 0;
    let startTime: number | null = null;
    let timerInterval: any = null;

    if (textPrompt != null) textPrompt.innerHTML = text;
    if (textUser != null && timerDisplay != null) {
      document.addEventListener("keydown", (event) => {
        if (!startTime) {
          startTime = Date.now();
          timerInterval = setInterval(() => {
            const elapsedTime = (Date.now() - startTime!) / 1000;
            if (timerDisplay !== null) {
              timerDisplay.innerHTML = `Vreme: ${elapsedTime.toFixed(2)} sekundi`;
            }
          }, 100);
        }

        if (this.characterSet.has(event.key)) {
          if (event.key === this.apiText.charAt(i) && textUser != null) {
            textUser.innerHTML += event.key;
          } else if (textUser != null) {
            textUser.innerHTML += "<span style='color:red'>" + event.key + "</span>";
            numberOfErrors++;
          }

          if (++i === textLen) {
            clearInterval(timerInterval);
            if(brojGresaka != null){
              const procenat = numberOfErrors / textLen * 100;
              brojGresaka.innerHTML += `Imate: ${numberOfErrors} grešaka od ${textLen} karaktera. (${procenat.toFixed(2)}%)`;
            }

            if (resetButton) {
              resetButton.style.visibility = "visible";
            }
          }
        }
      });
    }
  }

  restartuj() {
    window.location.reload();
  }
}
