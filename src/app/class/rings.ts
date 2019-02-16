export class Rings {
    constructor(AFRAME: any) {
        AFRAME.registerComponent('rings', {
            schema: {
                radius: { type: 'number', default: 6 },
                color: { type: 'string', default: 'orange' }
            },
            init: function () {
                const data = this.data;
                const el = this.el;

                this.material = new AFRAME.THREE.MeshBasicMaterial({ color: data.color, side: AFRAME.THREE.DoubleSide });
                this.geometry = new AFRAME.THREE.CircleGeometry(data.radius, 15);
                this.mesh = new AFRAME.THREE.Mesh(this.geometry, this.material);
                el.setObject3D(this.attrName, this.mesh);

            }

        });
    }
}
