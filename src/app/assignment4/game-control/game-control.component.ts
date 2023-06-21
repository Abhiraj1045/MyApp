import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter:number = 0;
  interval: any;
  @Output('onCounterIncrement') counterEvt:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    if(!this.interval){
    this.interval = setInterval(()=>{
      this.counter++;
      this.counterEvt.emit(this.counter)
    },1000)
  }
  }

  stopGame(){
    clearInterval(this.interval)
    this.interval = null;
  }

}
