import { Component } from '@angular/core';

@Component({
  selector: 'app-vezbanje-racer',
  templateUrl: './vezbanje-racer.component.html',
  styleUrls: ['./vezbanje-racer.component.css']
})
export class VezbanjeRacerComponent {
  public characterSet = new Set(["љ", "њ", "е", "р", "т", "з", "у", "и", "о", "п", "ш", "ђ", "а", "с", "д", "ф",
    "г", "х", "ј", "к", "л", "ч", "ћ", "ж", "џ", "ц", "в", "б", "н", "м", "Љ", "Њ", "Е", "Р", "Т", "З", "У", "И", "О", "П", "Ш", "Ђ", "А", "С", "Д", "Ф",
    "Г", "Х", "Ј", "К", "Л", "Ч", "Ћ", "Ж", "Џ", "Ц", "В", "Б", "Н", "М", " ", ".", ",", "!", ";", ":", "q", "w", "e", "r", "t", "y", "u",
    "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U",
    "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "0", "1", "2", "3", "4", "5", "6",
    "7", "8", "9"]);

  public characterMap = new Map(); //TODO Finish map

  konvertuj_u_latinicu() {} //TODO Finish converter

  ngOnInit() {
    this.pokreni();
  }

  pokreni(): void {
    let text: string = "Ја се зовем Лука";
    let textLen: number = text.length;
    let textPrompt: HTMLElement | null = document.getElementById("TextPrompt");
    let textUser: HTMLElement | null = document.getElementById("TextUser");
    let timerDisplay: HTMLElement | null = document.getElementById("TimerDisplay");
    let brojGresaka: HTMLElement | null = document.getElementById("BrojGresaka");
    let i: number = 0;
    let numberOfErrors = 0;
    let startTime: number | null = null;
    let timerInterval: any = null; // Dodato polje za interval

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
          if (event.key === text.charAt(i) && textUser != null) {
            textUser.innerHTML += event.key;
          } else if (textUser != null) {
            textUser.innerHTML += "<span style='color:red'>" + event.key + "</span>";
            numberOfErrors++;
          }

          if (++i === textLen) {
            clearInterval(timerInterval);
            // prekini kad se iskuca textLen karaktera
            if(brojGresaka != null){
              brojGresaka.innerHTML += 'Imate:' + numberOfErrors + ' gresaka od ' + i + ' karaktera.';
            }
            const resetButton = document.getElementById("rstBtn");

            if (resetButton) {
              resetButton.style.visibility = "visible";
            }
          }
        }
      });
    }
  }

  restartuj(): void {
    const resetButton = document.getElementById("rstBtn");

    if (resetButton) {
      resetButton.style.visibility = "hidden";
    }
  }
}
