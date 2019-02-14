export class Shrub {
    constructor(AFRAME: any, THREE: any) {
        AFRAME.registerComponent('shrub', {

            schema: {
                radius: { type: 'number', default: 1 },
                heigth: { type: 'number', default: 2.5 },
                color: { type: 'string', default: 'green' }
            },
            init: function () {
                const data = this.data;
                const el = this.el;

                this.material = new THREE.MeshBasicMaterial({ color: data.color });
                this.geometry = new THREE.ConeGeometry(data.radius, data.heigth, 20);
                this.mesh = new THREE.Mesh(this.geometry, this.material);
                el.setObject3D(this.attrName, this.mesh);

            }
        });
    }
}
