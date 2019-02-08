export class Tree {
  constructor(AFRAME: any) {
    AFRAME.registerComponent('treecarre', {

      init: function () {
        // tronc
        const space = ' ';
        const tronc = document.createElement('a-box');
        tronc.setAttribute('position', 0 + space + 3 + space + 0);
        tronc.setAttribute('material', 'color:#8b4513');
        tronc.setAttribute('geometry', 'depth:' + 2);
        tronc.setAttribute('geometry', 'width:' + 2);
        tronc.setAttribute('geometry', 'height:' + 6);
        this.el.appendChild(tronc);

        // feuillage
        const feuillage = document.createElement('a-box');
        feuillage.setAttribute('position', 0 + space + 5.5 + space + 0);
        feuillage.setAttribute('material', 'color:green');
        feuillage.setAttribute('geometry', 'depth:' + 8);
        feuillage.setAttribute('geometry', 'width:' + 5);
        feuillage.setAttribute('geometry', 'height:' + 4.5);
        this.el.appendChild(feuillage);

      },
    });
  }
}
