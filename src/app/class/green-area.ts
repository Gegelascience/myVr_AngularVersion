export class GreenArea {
    constructor(AFRAME: any) {
        /**
        * Component d'un espace vert'
        */
        AFRAME.registerComponent('greenarea', {

            init: function () {
                const space = ' ';
                // plans
                const center = document.createElement('a-plane');
                center.setAttribute('rotation', -90 + space + 0 + space + 0);
                center.setAttribute('material', 'color:#458B00');
                center.setAttribute('geometry', 'width:' + 20);
                center.setAttribute('geometry', 'height:' + 50);
                this.el.appendChild(center);

                const greenleft = document.createElement('a-plane');
                greenleft.setAttribute('rotation', -90 + space + 0 + space + 0);
                greenleft.setAttribute('position', -13 + space + 0 + space + 0);
                greenleft.setAttribute('material', 'color:#458B00');
                greenleft.setAttribute('geometry', 'width:' + 4);
                greenleft.setAttribute('geometry', 'height:' + 50);
                this.el.appendChild(greenleft);

                const greenright = document.createElement('a-plane');
                greenright.setAttribute('rotation', -90 + space + 0 + space + 0);
                greenright.setAttribute('position', 13 + space + 0 + space + 0);
                greenright.setAttribute('material', 'color:#458B00');
                greenright.setAttribute('geometry', 'width:' + 4);
                greenright.setAttribute('geometry', 'height:' + 50);
                this.el.appendChild(greenright);

                const lineleft = document.createElement('a-plane');
                lineleft.setAttribute('rotation', -90 + space + 0 + space + 0);
                lineleft.setAttribute('position', -10.5 + space + 0 + space + 0);
                lineleft.setAttribute('material', 'color:#FFF68F');
                lineleft.setAttribute('geometry', 'width:' + 1);
                lineleft.setAttribute('geometry', 'height:' + 50);
                this.el.appendChild(lineleft);

                const lineright = document.createElement('a-plane');
                lineright.setAttribute('rotation', -90 + space + 0 + space + 0);
                lineright.setAttribute('position', 10.5 + space + 0 + space + 0);
                lineright.setAttribute('material', 'color:#FFF68F');
                lineright.setAttribute('geometry', 'width:' + 1);
                lineright.setAttribute('geometry', 'height:' + 50);
                this.el.appendChild(lineright);

                const roadleft = document.createElement('a-plane');
                roadleft.setAttribute('rotation', -90 + space + 0 + space + 0);
                roadleft.setAttribute('position', -22.5 + space + 0 + space + 0);
                roadleft.setAttribute('material', 'color:#FFF68F');
                roadleft.setAttribute('geometry', 'width:' + 15);
                roadleft.setAttribute('geometry', 'height:' + 50);
                this.el.appendChild(roadleft);

                const roadright = document.createElement('a-plane');
                roadright.setAttribute('rotation', -90 + space + 0 + space + 0);
                roadright.setAttribute('position', 22.5 + space + 0 + space + 0);
                roadright.setAttribute('material', 'color:#FFF68F');
                roadright.setAttribute('geometry', 'width:' + 15);
                roadright.setAttribute('geometry', 'height:' + 50);
                this.el.appendChild(roadright);

                // road end
                const roadEnd = document.createElement('a-plane');
                roadEnd.setAttribute('rotation', -90 + space + 0 + space + 0);
                roadEnd.setAttribute('position', 0 + space + 0 + space + 30);
                roadEnd.setAttribute('material', 'color:#FFF68F');
                roadEnd.setAttribute('geometry', 'width:' + 60);
                roadEnd.setAttribute('geometry', 'height:' + 10);
                this.el.appendChild(roadEnd);
            },
        });
    }
}
