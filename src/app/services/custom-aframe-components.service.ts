import { Injectable } from '@angular/core';
import { Tree } from 'src/app/class/tree';
import { GreenArea } from 'src/app/class/green-area';
import { Car } from 'src/app/class/car';
import { CamMove } from 'src/app/class/cam-move';
import { Eiffel } from 'src/app/class/eiffel';
import { Planet } from 'src/app/class/planet';
import { Trajectory } from '../class/trajectory';
import { Rings } from '../class/rings';
import { Shrub } from '../class/shrub';

@Injectable({
  providedIn: 'root'
})
export class CustomAframeComponentsService {

  constructor() { }

  registerPlanet(AFRAME: any) {
    if (AFRAME.components.planet === undefined) {
      const tmp = new Planet(AFRAME);
    }
  }

  registerTree(AFRAME: any) {
    if (AFRAME.components.treecarre === undefined) {
      const tmp = new Tree(AFRAME);
    }
  }

  registerGreenArea(AFRAME: any) {
    if (AFRAME.components.greenarea === undefined) {
      const tmp = new GreenArea(AFRAME);
    }
  }

  registerCar(AFRAME: any) {
    if (AFRAME.components.car === undefined) {
      const tmp = new Car(AFRAME);
    }
  }

  registerCamMove(AFRAME: any) {
    if (AFRAME.components.cam_move === undefined) {
      const tmp = new CamMove(AFRAME);
    }
  }

  registerEiffelTower(AFRAME: any) {
    if (AFRAME.components.eiffel === undefined) {
      const tmp = new Eiffel(AFRAME);
    }
  }

  registerTrajectory(AFRAME: any) {
    if (AFRAME.components.trajectory === undefined) {
      const tmp = new Trajectory(AFRAME);
    }
  }

  registerRings(AFRAME: any) {
    if (AFRAME.components.rings === undefined) {
      const tmp = new Rings(AFRAME);
    }
  }

  registerShrub(AFRAME: any) {
    if (AFRAME.components.shrub === undefined) {
      const tmp = new Shrub(AFRAME);
    }
  }
}
