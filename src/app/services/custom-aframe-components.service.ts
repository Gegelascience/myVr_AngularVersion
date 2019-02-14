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

  planet = false;
  tree = false;
  greenArea = false;
  car = false;
  cam = false;
  eiffel = false;
  trajectory = false;
  rings = false;
  shrub = false;

  constructor() { }

  registerPlanet(AFRAME: any, THREE: any) {
    if (!this.planet) {
      const tmp = new Planet(AFRAME, THREE);
      this.planet = true;
    }
  }

  registerTree(AFRAME: any) {
    if (!this.tree) {
      const tmp = new Tree(AFRAME);
      this.tree = true;
    }
  }

  registerGreenArea(AFRAME: any) {
    if (!this.greenArea) {
      const tmp = new GreenArea(AFRAME);
      this.greenArea = true;
    }
  }

  registerCar(AFRAME: any, THREE: any) {
    if (!this.car) {
      const tmp = new Car(AFRAME, THREE);
      this.car = true;
    }
  }

  registerCamMove(AFRAME: any) {
    if (!this.cam) {
      const tmp = new CamMove(AFRAME);
      this.cam = true;
    }
  }

  registerEiffelTower(AFRAME: any, THREE: any) {
    if (!this.eiffel) {
      const tmp = new Eiffel(AFRAME, THREE);
      this.eiffel = true;
    }
  }

  registerTrajectory(AFRAME: any, THREE: any) {
    if (!this.trajectory) {
      const tmp = new Trajectory(AFRAME, THREE);
      this.trajectory = true;
    }
  }

  registerRings(AFRAME: any, THREE: any) {
    if (!this.rings) {
      const tmp = new Rings(AFRAME, THREE);
      this.rings = true;
    }
  }

  registerShrub(AFRAME: any, THREE: any) {
    if (!this.shrub) {
      const tmp = new Shrub(AFRAME, THREE);
      this.shrub = true;
    }
  }
}
