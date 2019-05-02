import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  unitToArray, Rectangle, Unit}    from '../rectangle';
import { RECTANGLES } from '../mock-rectangles';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.less']
})
export class AreaCalculatorComponent implements OnInit {
  rectangles = RECTANGLES

  selectedRectangle: Rectangle;

  onSelect(rectangle: Rectangle): void {
  this.selectedRectangle = rectangle;
  }
  @Input() rectangle: Rectangle;
  
  @Input() 
  width: number | undefined

  @Input() 
  length: number | undefined

  @Input() 
  unit: string | undefined

  @Input() 
  area: number | undefined

  @Output()
  widthChange = new EventEmitter()

  @Output()
  lengthChange = new EventEmitter()

  @Output()
  unitChange = new EventEmitter()

  @Output()
  areaChange = new EventEmitter()

  units = unitToArray()

  handleWidthChange(width) {
    this.widthChange.emit(width);
    this.calculate()
  }

  handleLengthChange(length) {
    this.lengthChange.emit(length);
    this.calculate()
  }
  handleUnitChange(unit) {
    this.unitChange.emit(unit)
  }

 
  
  calculate() {
    this.rectangle.area = this.rectangle.width * this.rectangle.length
    this.areaChange.emit(this.area)
   }
  constructor() { }

  ngOnInit() {
  }

}
