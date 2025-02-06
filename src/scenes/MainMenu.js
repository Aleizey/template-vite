import { Scene } from 'phaser';
import biciApi from '../components/biciApi';
import { Bugfender } from '@bugfender/sdk';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(512, 384, 'background');

        this.add.image(512, 300, 'logo');

        this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });

        biciApi();

        Bugfender.init({
            appKey: '0KfNBWYt9Xa8DXgE72ke7LckUyIDSC0z',
            // overrideConsoleMethods: true,
            // printToConsole: true,
            // registerErrorHandler: true,
            // logBrowserEvents: true,
            // logUIEvents: true,
            // version: '',
            // build: '',
        });

        const boton = () => {
            try {
                if (a == b) {
                    Bugfender.log('El dato:', a, "es igual a ", b);
                }
                return a + b;
            }
            catch (error) {
                Bugfender.error("Error en la función", error);
            }
        }
        const div = document.createElement("div");
        div.textContent = "Hola"
        document.body.insertAdjacentElement("afterbegin", div);
        div.addEventListener("click", boton);
    }

}
