export class Car {
  constructor(AFRAME: any, THREE: any) {
    /**
     * Component d'une voiture'
     */

    AFRAME.registerComponent('car', {
      schema: {
        teinte: { type: 'string', default: 'red' },
        sens: { type: 'boolean', default: false }
      },

      init: function () {
        let rotY = 0;
        let corpSens = 0;
        let fenetreSens = 0;
        let triangleSens = [0, 0];
        const space = ' ';
        let triangleSens2 = triangleSens;
        let avantSens = triangleSens;
        if (this.data.sens) {
          rotY = 180;
          corpSens = 0.5;
          fenetreSens = 3.5;
          triangleSens = [0.5, 2];
          triangleSens2 = [6.5, 2];
          avantSens = [6.5, 2];
        }
        // fenetres
        const teintefenetre = 'black';
        const fenetre = document.createElement('a-box');
        fenetre.setAttribute('position', -1 + fenetreSens + space + 2 + space + 0);
        fenetre.setAttribute('material', 'color:' + teintefenetre);
        fenetre.setAttribute('geometry', 'depth:' + 2);
        fenetre.setAttribute('geometry', 'width:' + 3);
        fenetre.setAttribute('geometry', 'height:' + 1);
        this.el.appendChild(fenetre);

        const triangle = document.createElement('a-entity');
        const sht = new THREE.Shape();
        sht.moveTo(1, 0);
        sht.lineTo(0, 0);
        sht.lineTo(0, 2);
        sht.lineTo(1, 0);

        const extrudeSettings = { bevelEnabled: false, steps: 1, amount: 2 };
        const geometryT = new THREE.ExtrudeGeometry(sht, extrudeSettings);

        const materialT = new THREE.MeshBasicMaterial({ color: teintefenetre });
        const meshT = new THREE.Mesh(geometryT, materialT);
        triangle.setObject3D(this.attrName, meshT);
        const xt = 0.5 + triangleSens[0];
        const zt = 1 - triangleSens[1];
        triangle.setAttribute('position', xt + space + 1.5 + space + zt);
        triangle.setAttribute('rotation', 180 + space + rotY + space + -90);
        this.el.appendChild(triangle);

        const triangle2 = document.createElement('a-entity');
        const sht2 = new THREE.Shape();
        sht2.moveTo(1, 0);
        sht2.lineTo(0, 0);
        sht2.lineTo(0, 0.5);
        sht2.lineTo(1, 0);

        const geometryT2 = new THREE.ExtrudeGeometry(sht2, extrudeSettings);
        const meshT2 = new THREE.Mesh(geometryT2, materialT);
        triangle2.setObject3D(this.attrName, meshT2);
        const xt2 = -2.5 + triangleSens2[0];
        const zt2 = -1 + triangleSens2[1];
        triangle2.setAttribute('position', xt2 + space + 1.5 + space + zt2);
        triangle2.setAttribute('rotation', {
          x: 180,
          y: 180 + rotY,
          z: -90
        });
        this.el.appendChild(triangle2);

        // corps
        const corps = document.createElement('a-box');
        corps.setAttribute('position', 0.5 + corpSens + space + 1 + space + 0);
        corps.setAttribute('material', 'color:' + this.data.teinte);
        corps.setAttribute('geometry', 'depth:' + 2);
        corps.setAttribute('geometry', 'width:' + 7);
        corps.setAttribute('geometry', 'height:' + 1);
        this.el.appendChild(corps);

        // avant
        const avant = document.createElement('a-entity');
        const shAv = new THREE.Shape();
        shAv.moveTo(1, 0);
        shAv.lineTo(0, 0);
        shAv.lineTo(0, 1.5);
        shAv.lineTo(0.5, 1.5);
        shAv.lineTo(1, 0);


        const geometryAv = new THREE.ExtrudeGeometry(shAv, extrudeSettings);
        const materialAv = new THREE.MeshBasicMaterial({ color: this.data.teinte });
        const meshAv = new THREE.Mesh(geometryAv, materialAv);
        avant.setObject3D(this.attrName, meshAv);
        const xAv = 4 - avantSens[0];
        const zAv = 1 - avantSens[1];
        avant.setAttribute('position', xAv + space + 0.5 + space + zAv);
        avant.setAttribute('rotation', {
          x: 180,
          y: 0 + rotY,
          z: -90
        });
        this.el.appendChild(avant);

        // roues
        const roues = [];
        for (let index = 0; index < 4; index++) {
          const roue = document.createElement('a-circle');
          roue.setAttribute('position', 4 + space + 0.5 + space + 1.05);
          roue.setAttribute('material', 'color:' + teintefenetre);
          roue.setAttribute('material', 'side:double');
          roue.setAttribute('geometry', 'radius:' + 0.5);
          roues.push(roue);
        }

        roues[1].setAttribute('position', {
          x: -2.5,
          y: 0.5,
          z: 1.05
        });
        roues[2].setAttribute('position', {
          x: 4,
          y: 0.5,
          z: -1.05
        });
        roues[3].setAttribute('position', {
          x: -2.5,
          y: 0.5,
          z: -1.05
        });

        for (let index = 0; index < roues.length; index++) {
          this.el.appendChild(roues[index]);
        }
      }
    });
  }
}
