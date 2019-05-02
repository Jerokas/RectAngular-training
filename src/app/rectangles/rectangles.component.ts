import { Component, OnInit } from '@angular/core';
import { Rectangle, Unit } from '../rectangle'
import { RECTANGLES } from '../mock-rectangles';
import { RectangleService } from '../rectangle.service';


@Component({
  selector: 'app-rectangles',
  templateUrl: './rectangles.component.html',
  styleUrls: ['./rectangles.component.less']
})
export class RectanglesComponent implements OnInit {

  rectangles: Rectangle[];
  selectedRectangle: Rectangle;

  rectangle: Rectangle = {
    id: 1,
    name: 'Mr Get Rect',
    length: 12,
    width: 14,
    unit: Unit.meter,
    area: 168
  };

  constructor(private rectangleService: RectangleService) { }

  ngOnInit() {
    this.getRectangles();
  }

  onSelect(rectangle: Rectangle): void {
    this.selectedRectangle = rectangle;
  }
  getRectangles(): void {
    this.rectangleService.getRectangles()
      .subscribe(rectangles => this.rectangles = rectangles);
  }
}
