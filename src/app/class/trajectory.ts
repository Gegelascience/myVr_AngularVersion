export class Trajectory {
    constructor(AFRAME: any, THREE: any) {
        AFRAME.registerComponent('trajectory', {
            schema: {
                inner: { type: 'number', default: 89.8 },
                outer: { type: 'number', default: 90.2 }
            },
            init: function () {
                const data = this.data;
                const el = this.el;

                this.material = new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide });
                this.geometry = new THREE.RingGeometry(data.inner, data.outer, 15);
                this.mesh = new THREE.Mesh(this.geometry, this.material);
                el.setObject3D(this.attrName, this.mesh);

            }

        });
    }
}
