export class Eiffel {
  constructor(AFRAME: any) {
    /**
    * Composant de la tour Eiffel
    */
    const colorEtage = '#404040';
    const colorSocle = '#ded4d1';
    const colorArche = 'grey';

    AFRAME.registerComponent('archn2', {
      schema: {
        color: { type: 'color', default: colorArche }
      },

      init: function () {
        // Do something when component first attached.
        const data = this.data;
        const el = this.el;

        const sh = new AFRAME.THREE.Shape();

        sh.moveTo(0, 9);
        sh.lineTo(-20, 12);
        sh.lineTo(-20, 6);
        sh.lineTo(0, 3);
        sh.lineTo(0, -3);
        sh.lineTo(-20, -6);
        sh.lineTo(-20, -12);
        sh.lineTo(0, -9);
        sh.lineTo(60, -3);
        sh.lineTo(60, 3);
        sh.lineTo(0, 9);


        const extrudeSettings = { bevelEnabled: false, steps: 1, amount: 1 };
        this.geometry = new AFRAME.THREE.ExtrudeGeometry(sh, extrudeSettings);

        this.material = new AFRAME.THREE.MeshBasicMaterial({ color: data.color });
        this.mesh = new AFRAME.THREE.Mesh(this.geometry, this.material);
        el.setObject3D(this.attrName, this.mesh);
      },

      remove: function () {
        // this.el.removeObject3D('mesh');
      },

    });

    AFRAME.registerComponent('archn1', {

      schema: {
        color: { type: 'color', default: colorArche }
      },

      init: function () {
        // Do something when component first attached.
        const data = this.data;
        const el = this.el;

        const sh = new AFRAME.THREE.Shape();
        sh.moveTo(6, -1.5);
        sh.lineTo(0, -1.5);
        sh.lineTo(6, 28.5);
        sh.lineTo(30, 28.5);
        sh.lineTo(36, -1.5);
        sh.lineTo(30, -1.5);
        sh.lineTo(27, 18.5);
        sh.bezierCurveTo(27, 18.5, 18, 25, 9, 18.5);
        sh.lineTo(6, -1.5);

        const extrudeSettings = { bevelEnabled: false, steps: 1, amount: 1 };
        this.geometry = new AFRAME.THREE.ExtrudeGeometry(sh, extrudeSettings);

        this.material = new AFRAME.THREE.MeshBasicMaterial({ color: data.color });
        this.mesh = new AFRAME.THREE.Mesh(this.geometry, this.material);
        el.setObject3D(this.attrName, this.mesh);

      },

      remove: function () {
        // this.el.removeObject3D('mesh');
      },

    });

    AFRAME.registerComponent('eiffel', {

      init: function () {
        const space = ' ';

        // socles
        const socles = [];
        for (let index = 0; index < 4; index++) {
          const socle = document.createElement('a-box');
          let posX = 15;
          const posY = -1.5;
          let posZ = 15;
          if (index % 2 === 0) {
            posX = -15;
          }
          if (index > 1) {
            posZ = -15;
          }
          socle.setAttribute('position', posX + space + posY + space + posZ);
          socle.setAttribute('material', 'color:' + colorSocle);
          socle.setAttribute('geometry', 'depth:' + 12);
          socle.setAttribute('geometry', 'width:' + 12);
          socle.setAttribute('geometry', 'height:' + 2);
          socles.push(socle);
        }
        for (let index = 0; index < socles.length; index++) {
          this.el.appendChild(socles[index]);
        }


        // etages
        const etage1 = document.createElement('a-box');
        etage1.setAttribute('position', 0 + space + 30 + space + 0);
        etage1.setAttribute('material', 'color:' + colorEtage);
        etage1.setAttribute('geometry', 'depth:' + 30);
        etage1.setAttribute('geometry', 'width:' + 30);
        etage1.setAttribute('geometry', 'height:' + 5);
        this.el.appendChild(etage1);

        const etage2 = document.createElement('a-box');
        etage2.setAttribute('position', 0 + space + 52 + space + 0);
        etage2.setAttribute('material', 'color:' + colorEtage);
        etage2.setAttribute('geometry', 'depth:' + 23);
        etage2.setAttribute('geometry', 'width:' + 23);
        etage2.setAttribute('geometry', 'height:' + 3);
        this.el.appendChild(etage2);

        const etage3 = document.createElement('a-box');
        etage3.setAttribute('position', 0 + space + 111 + space + 0);
        etage3.setAttribute('material', 'color:' + colorEtage);
        etage3.setAttribute('geometry', 'depth:' + 10);
        etage3.setAttribute('geometry', 'width:' + 10);
        etage3.setAttribute('geometry', 'height:' + 3);
        this.el.appendChild(etage3);

        // antenne et station radio
        const station = document.createElement('a-sphere');
        station.setAttribute('position', 0 + space + 112 + space + 0);
        station.setAttribute('material', 'color:' + colorEtage);
        station.setAttribute('geometry', 'radius;' + 4);
        this.el.appendChild(station);

        const antenne = document.createElement('a-entity');
        antenne.setAttribute('line', 'start:0 113 0');
        antenne.setAttribute('line', 'end:0 133 0');
        antenne.setAttribute('line', 'color:' + colorEtage);
        this.el.appendChild(antenne);

        // arche niveau 1
        const archn1p1 = document.createElement('a-entity');
        archn1p1.setAttribute('archn1', '');
        archn1p1.setAttribute('position', -18 + space + 0 + space + 18);
        archn1p1.setAttribute('rotation', -11.3 + space + 0 + space + 0);
        this.el.appendChild(archn1p1);

        const archn1p2 = document.createElement('a-entity');
        archn1p2.setAttribute('archn1', '');
        archn1p2.setAttribute('position', 18 + space + 0 + space + 18);
        archn1p2.setAttribute('rotation', -11.3 + space + 90 + space + 0);
        this.el.appendChild(archn1p2);

        const archn1p3 = document.createElement('a-entity');
        archn1p3.setAttribute('archn1', '');
        archn1p3.setAttribute('position', -18 + space + 0 + space + -18);
        archn1p3.setAttribute('rotation', -11.3 + space + -90 + space + 0);
        this.el.appendChild(archn1p3);

        const archn1p4 = document.createElement('a-entity');
        archn1p4.setAttribute('archn1', '');
        archn1p4.setAttribute('position', 18 + space + 0 + space + -18);
        archn1p4.setAttribute('rotation', -11.3 + space + 180 + space + 0);
        this.el.appendChild(archn1p4);

        // arche niveau 2 et 3
        const archn2p1 = document.createElement('a-entity');
        archn2p1.setAttribute('archn2', '');
        archn2p1.setAttribute('position', -9 + space + 52 + space + 0);
        archn2p1.setAttribute('rotation', -6 + space + -90 + space + 90);
        this.el.appendChild(archn2p1);


        const archn2p2 = document.createElement('a-entity');
        archn2p2.setAttribute('archn2', '');
        archn2p2.setAttribute('position', 9 + space + 52 + space + 0);
        archn2p2.setAttribute('rotation', -6 + space + 90 + space + 90);
        this.el.appendChild(archn2p2);

        const archn2p3 = document.createElement('a-entity');
        archn2p3.setAttribute('archn2', '');
        archn2p3.setAttribute('position', 0 + space + 52 + space + 9);
        archn2p3.setAttribute('rotation', -6 + space + 0 + space + 90);
        this.el.appendChild(archn2p3);

        const archn2p4 = document.createElement('a-entity');
        archn2p4.setAttribute('archn2', '');
        archn2p4.setAttribute('position', 0 + space + 52 + space + -9);
        archn2p4.setAttribute('rotation', -6 + space + 180 + space + 90);
        this.el.appendChild(archn2p4);

      },
    });
  }
}
