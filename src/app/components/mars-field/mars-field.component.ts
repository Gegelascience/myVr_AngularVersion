import { Component, OnInit } from '@angular/core';
import { CustomAframeComponentsService } from 'src/app/services/custom-aframe-components.service';

declare var AFRAME: any;
declare var THREE: any;

@Component({
  selector: 'app-mars-field',
  templateUrl: './mars-field.component.html',
  styleUrls: ['./mars-field.component.css']
})
export class MarsFieldComponent implements OnInit {

  constructor(private customAframeService: CustomAframeComponentsService) { }

  ngOnInit() {
    this.customAframeService.registerTree(AFRAME);
    this.customAframeService.registerGreenArea(AFRAME);
    this.customAframeService.registerCar(AFRAME, THREE);
    this.customAframeService.registerCamMove(AFRAME);
    this.customAframeService.registerEiffelTower(AFRAME, THREE);
  }

}
