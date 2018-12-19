import { Component, OnInit } from '@angular/core';
import { Tree } from 'src/app/class/tree';
import { GreenArea } from 'src/app/class/green-area';
import { Car } from 'src/app/class/car';
import { CamMove } from 'src/app/class/cam-move';
import { Eiffel } from 'src/app/class/eiffel';

declare var AFRAME:any;
declare var THREE:any;

@Component({
  selector: 'app-mars-field',
  templateUrl: './mars-field.component.html',
  styleUrls: ['./mars-field.component.css']
})
export class MarsFieldComponent implements OnInit {
  tree:Tree;
  greenArea:GreenArea;
  car:Car;
  cam:CamMove;
  eiffel:Eiffel;

  constructor() { }

  ngOnInit() {
    this.tree = new Tree(AFRAME);    
    this.greenArea = new GreenArea(AFRAME);
    this.car = new Car(AFRAME,THREE);
    this.cam = new CamMove(AFRAME);
    this.eiffel = new Eiffel(AFRAME, THREE);
  }

}
