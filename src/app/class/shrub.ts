export class Shrub {
    constructor(AFRAME: any) {
        AFRAME.registerComponent('shrub', {

            schema: {
                radius: { type: 'number', default: 1 },
                heigth: { type: 'number', default: 2.5 },
                color: { type: 'string', default: 'green' }
            },
            init: function () {
                const data = this.data;
                const el = this.el;

                this.material = new AFRAME.THREE.MeshBasicMaterial({ color: data.color });
                this.geometry = new AFRAME.THREE.ConeGeometry(data.radius, data.heigth, 20);
                this.mesh = new AFRAME.THREE.Mesh(this.geometry, this.material);
                el.setObject3D(this.attrName, this.mesh);

            }
        });
    }
}
