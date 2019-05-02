import { Component, Output, EventEmitter } from '@angular/core';
import { Rectangle, Unit } from './rectangle';
import { RECTANGLES } from './mock-rectangles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-training';

  units: Unit;
  
  area: number;

  rectangles = RECTANGLES

  selectedRectangle: Rectangle;
  onSelect(rectangle: Rectangle): void {
  this.selectedRectangle = rectangle;
  }

  @Output()
  areaChange = new EventEmitter()

  handleAreaChange(area) {
    this.areaChange.emit(area)
  }

  calculate() {
   this.area = this.model.width * this.model.length;
  }
  model = new Rectangle(18, 'Dr Rectangle', this.units, 12, 23, this.area );

  // TODO: Remove this when I'm done
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

}
