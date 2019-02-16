import { Component, OnInit } from '@angular/core';
import { CustomAframeComponentsService } from 'src/app/services/custom-aframe-components.service';

declare var AFRAME: any;

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit {

  constructor(private customAframeService: CustomAframeComponentsService) { }

  ngOnInit() {
    this.customAframeService.registerPlanet(AFRAME);
    this.customAframeService.registerTrajectory(AFRAME);
    this.customAframeService.registerRings(AFRAME);
  }

}
