export class Eiffel {
    constructor(AFRAME:any, THREE:any){
        /**
        * Primitive de la tour Eiffel
        */
        var colorEtage='#404040';
        var colorSocle='#ded4d1';
        var colorArche='grey';

        AFRAME.registerComponent('archn2', {
            schema: { 
                color: {type: 'color', default: colorArche}
            },

            init: function () {
                // Do something when component first attached.
                var data=this.data;
                var el=this.el;

                var sh= new THREE.Shape();

                sh.moveTo(0,9);
                sh.lineTo(-20,12);
                sh.lineTo(-20,6);
                sh.lineTo(0,3);
                sh.lineTo(0,-3);
                sh.lineTo(-20,-6);
                sh.lineTo(-20,-12);
                sh.lineTo(0,-9);
                sh.lineTo(60,-3);
                sh.lineTo(60,3);
                sh.lineTo(0,9);


                var extrudeSettings = { bevelEnabled: false, steps: 1, amount: 1};
                this.geometry=new THREE.ExtrudeGeometry(sh,extrudeSettings)

                this.material = new THREE.MeshBasicMaterial({color: data.color});
                this.mesh = new THREE.Mesh(this.geometry, this.material);
                el.setObject3D(this.attrName, this.mesh);
            },

            remove: function () {
                // Do something the component or its entity is detached.
                this.el.removeObject3D('mesh');
            },

        });

        AFRAME.registerComponent('archn1', {

            schema: {
              color: {type: 'color', default: colorArche}
            },
          
            init: function () {
              // Do something when component first attached.
              var data=this.data;
              var el=this.el;
          
              var sh= new THREE.Shape();
              sh.moveTo(6,-1.5);
              sh.lineTo(0,-1.5);
              sh.lineTo(6,28.5);
              sh.lineTo(30,28.5);
              sh.lineTo(36,-1.5);
              sh.lineTo(30,-1.5);
              sh.lineTo(27,18.5);
              sh.bezierCurveTo(27,18.5,18,25,9,18.5);
              sh.lineTo(6,-1.5);
          
              var extrudeSettings = { bevelEnabled: false, steps: 1, amount: 1};
              this.geometry=new THREE.ExtrudeGeometry(sh,extrudeSettings)
          
              this.material = new THREE.MeshBasicMaterial({color: data.color});
              this.mesh = new THREE.Mesh(this.geometry, this.material);
              el.setObject3D(this.attrName, this.mesh);
              
            },
          
            remove: function () {
              // Do something the component or its entity is detached.
              this.el.removeObject3D('mesh');
            },
          
        });

        AFRAME.registerComponent('eiffel', {

            init: function () {
              // Do something when component first attached.
          
              //socles
              var socles=[];
              for (let index = 0; index < 4; index++) {
                var socle=document.createElement('a-box');
                var pos=socle.getAttribute('position');
                pos.y=-1.5;
                if (index%2===0) {
                  pos.x=-15;
                } else {
                  pos.x=15;
                }
                if (index>1) {
                  pos.z=-15;
                } else {
                  pos.z=15;
                }
                socle.setAttribute('position',pos);
                socle.setAttribute('material', 'color', colorSocle);
                socle.setAttribute('geometry', 'depth', 12);
                socle.setAttribute('geometry', 'width', 12);
                socle.setAttribute('geometry', 'height', 2);
                socles.push(socle);
              }
              for (let index = 0; index < socles.length; index++) {
                this.el.appendChild(socles[index]); 
              }
          
          
              //etages
              var etage1=document.createElement('a-box');
              etage1.setAttribute('position', {
                x: 0,
                y: 30,
                z: 0
              });
              etage1.setAttribute('material', 'color', colorEtage);
              etage1.setAttribute('geometry', 'depth', 30);
              etage1.setAttribute('geometry', 'width', 30);
              etage1.setAttribute('geometry', 'height', 5);
              this.el.appendChild(etage1);
          
              var etage2=document.createElement('a-box');
              etage2.setAttribute('position', {
                x: 0,
                y: 52,
                z: 0
              });
              etage2.setAttribute('material', 'color', colorEtage);
              etage2.setAttribute('geometry', 'depth', 23);
              etage2.setAttribute('geometry', 'width', 23);
              etage2.setAttribute('geometry', 'height', 3);
              this.el.appendChild(etage2);
          
              var etage3=document.createElement('a-box');
              etage3.setAttribute('position', {
                x: 0,
                y: 111,
                z: 0
              });
              etage3.setAttribute('material', 'color', colorEtage);
              etage3.setAttribute('geometry', 'depth', 10);
              etage3.setAttribute('geometry', 'width', 10);
              etage3.setAttribute('geometry', 'height', 3);
              this.el.appendChild(etage3);
          
              //antenne et station radio
              var station=document.createElement('a-sphere');
              station.setAttribute('position', {
                x: 0,
                y: 112,
                z: 0
              });
              station.setAttribute('material', 'color', colorEtage);
              station.setAttribute('geometry', 'radius', 4);
              this.el.appendChild(station);

              var antenne = document.createElement('a-entity');
              antenne.setAttribute('line',{
                start:{
                  x: 0,
                  y: 113,
                  z: 0
                },
                end:{
                  x: 0,
                  y: 133,
                  z: 0
                },
                color: colorEtage
              });
          
              //arche niveau 1
              var archn1p1=document.createElement('a-entity');
              archn1p1.setAttribute('archn1','');
              archn1p1.setAttribute('position', {
                x: -18,
                y: 0,
                z: 18
              });
              archn1p1.setAttribute('rotation', {
                x: -11.3,
                y: 0,
                z: 0
              });
              this.el.appendChild(archn1p1);

              var archn1p2=document.createElement('a-entity');
              archn1p2.setAttribute('archn1','');
              archn1p2.setAttribute('position', {
                x: 18,
                y: 0,
                z: 18
              });
              archn1p2.setAttribute('rotation', {
                x: -11.3,
                y: 90,
                z: 0
              });
              this.el.appendChild(archn1p2);

              var archn1p3=document.createElement('a-entity');
              archn1p3.setAttribute('archn1','');
              archn1p3.setAttribute('position', {
                x: -18,
                y: 0,
                z: -18
              });
              archn1p3.setAttribute('rotation', {
                x: -11.3,
                y: -90,
                z: 0
              });
              this.el.appendChild(archn1p3);

              var archn1p4=document.createElement('a-entity');
              archn1p4.setAttribute('archn1','');
              archn1p4.setAttribute('position', {
                x: 18,
                y: 0,
                z: -18
              });
              archn1p4.setAttribute('rotation', {
                x: -11.3,
                y: 180,
                z: 0
              });
              this.el.appendChild(archn1p4);
          
              //arche niveau 2 et 3
              var archn2p1=document.createElement('a-entity');
              archn2p1.setAttribute('archn2','');
              archn2p1.setAttribute('position', {
                x: -9,
                y: 52,
                z: 0
              });
              archn2p1.setAttribute('rotation', {
                x: -6,
                y: -90,
                z: 90
              });
              this.el.appendChild(archn2p1);
              
              
              var archn2p2=document.createElement('a-entity');
              archn2p2.setAttribute('archn2','');
              archn2p2.setAttribute('position', {
                x: 9,
                y: 52,
                z: 0
              });
              archn2p2.setAttribute('rotation', {
                x: -6,
                y: 90,
                z: 90
              });
              this.el.appendChild(archn2p2);
              
              var archn2p3=document.createElement('a-entity');
              archn2p3.setAttribute('archn2','');
              archn2p3.setAttribute('position', {
                x: 0,
                y: 52,
                z: 9
              });
              archn2p3.setAttribute('rotation', {
                x: -6,
                y: 0,
                z: 90
              });
              this.el.appendChild(archn2p3);
              
              var archn2p4=document.createElement('a-entity');
              archn2p4.setAttribute('archn2','');
              archn2p4.setAttribute('position', {
                x: 0,
                y: 52,
                z: -9
              });
              archn2p4.setAttribute('rotation', {
                x: -6,
                y: 180,
                z: 90
              });
              this.el.appendChild(archn2p4);
          
            },
        });
    }
}
