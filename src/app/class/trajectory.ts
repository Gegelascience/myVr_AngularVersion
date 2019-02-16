export class Trajectory {
    constructor(AFRAME: any) {
        AFRAME.registerComponent('trajectory', {
            schema: {
                inner: { type: 'number', default: 89.8 },
                outer: { type: 'number', default: 90.2 }
            },
            init: function () {
                const data = this.data;
                const el = this.el;

                this.material = new AFRAME.THREE.MeshBasicMaterial({ color: 'white', side: AFRAME.THREE.DoubleSide });
                this.geometry = new AFRAME.THREE.RingGeometry(data.inner, data.outer, 15);
                this.mesh = new AFRAME.THREE.Mesh(this.geometry, this.material);
                el.setObject3D(this.attrName, this.mesh);

            }

        });
    }
}
