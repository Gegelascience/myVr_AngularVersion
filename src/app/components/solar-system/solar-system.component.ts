import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/class/planet';

declare var AFRAME: any;

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit {

  planet: Planet;

  constructor() { }

  ngOnInit() {
    this.planet = new Planet(AFRAME);
  }

}
