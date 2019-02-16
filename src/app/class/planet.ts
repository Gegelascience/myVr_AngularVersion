export class Planet {
    constructor(AFRAME: any) {
        AFRAME.registerComponent('planet', {
            schema: {
                tRevol: { type: 'number', default: 500000 },
                semiAxe: { type: 'number', default: 20 },
                angularStart: { type: 'number', default: 0 },
                tRotation: { type: 'number', default: 5000 },
                radiusPlanet: { type: 'number', default: 2 },
                move: { type: 'boolean', default: true },
                texture: { type: 'string', default: 'assets/textures/neptune.jpg' },
                isColor: { type: 'boolean', default: false },
                color: { type: 'string', default: '#404040' }
            },
            init: function () {
                const data = this.data;
                const el = this.el;

                if (!data.isColor) {
                    const texture = new AFRAME.THREE.TextureLoader().load(data.texture);
                    this.material = new AFRAME.THREE.MeshBasicMaterial({ map: texture });
                } else {
                    this.material = new AFRAME.THREE.MeshBasicMaterial({ color: data.color });
                }
                this.geometry = new AFRAME.THREE.SphereGeometry(data.radiusPlanet, 15, 25);
                this.mesh = new AFRAME.THREE.Mesh(this.geometry, this.material);
                el.setObject3D(this.attrName, this.mesh);

            },

            tick: function (time, timeDelta) {
                // Do something on every scene tick or frame.
                if (this.data.move) {
                    const pos = this.el.getAttribute('position');
                    pos.x = 2 * this.data.semiAxe * Math.cos(this.data.angularStart + 360 * (time + timeDelta) / this.data.tRevol);
                    pos.z = 2 * this.data.semiAxe * Math.sin(this.data.angularStart + 360 * (time + timeDelta) / this.data.tRevol);
                    this.el.setAttribute('position', pos);
                    const rot = this.el.getAttribute('rotation');
                    rot.y = 360 * (time + timeDelta) / this.data.tRotation;
                    this.el.setAttribute('rotation', rot);
                }

            }

        });
    }
}
