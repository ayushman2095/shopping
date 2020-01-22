import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() value = new EventEmitter<any>();
  public minimum = 100;

  constructor() { }

  ngOnInit() {
  }
public getRange(){
let sliderVal = <HTMLInputElement>document.getElementById("myRange");
console.log(sliderVal.value)
this.value.emit(sliderVal.value);
}
}
