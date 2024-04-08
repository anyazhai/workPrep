import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  oddNumbers: number[] = []
  evenNumbers: number[] = []
  i = 0

  interval;
  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.i+1);
      this.i++;
      if(this.i%2 === 0){
        this.evenNumbers.push(this.i)
      } else{
        this.oddNumbers.push(this.i)
      }
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }
}
