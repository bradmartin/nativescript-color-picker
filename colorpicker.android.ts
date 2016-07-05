/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/GrenderG/Color-O-Matic
*************************************************************************************/

import { platformNames } from "platform";
import { Page } from "ui/page";
import { topmost } from "ui/frame";
import * as app from "application";

// declare var android, es: any;
declare var android, com: any;

export class ColorPicker {
    // private _ColorPicker: es.dmoral.coloromatic.ColorOMaticDialog;
    private ChromaDialog = com.pavelsikun.vintagechroma.ChromaDialog;
    // private ColorOMatic = es.dmoral.coloromatic;
    // private ColorMode = es.dmoral.coloromatic.colormode.ColorMode;
    // private IndicatorMode = es.dmoral.coloromatic.IndicatorMode;
    // private OnColorSelectedListener = es.dmoral.coloromatic.OnColorSelectedListener;

    // private ColorOMatic = es.dmoral.coloromatic;
    private ColorMode = com.pavelsikun.vintagechroma.colormode.ColorMode;
    private IndicatorMode = com.pavelsikun.vintagechroma.IndicatorMode;
    private OnColorSelectedListener = com.pavelsikun.vintagechroma.OnColorSelectedListener;

    constructor() {
        console.log('Constructor() start...');
    }



    public show(initialColor: string = '#ffffff', colorMode: any = this.ColorMode.ARGB, indicatorMode: any = this.IndicatorMode.HEX, showColorIndicator: boolean = true) {
        try {
            // let mgr = topmost().android.activity.getFragmentManager();
            let mgr = app.android.startActivity.getFragmentManager();
            // let mgr = new android.support.v4.app.FragmentActivity().getSupportFragmentManager();
            // let mgr = app.android.startActivity.getFragmentManager();
            console.log('mgr: ' + mgr);


            let builder = new com.pavelsikun.vintagechroma.ChromaDialog.Builder()
                .initialColor(initialColor)
                .colorMode(colorMode)
                .indicatorMode(indicatorMode)
                // .showColorIndicator(showColorIndicator)
                .onColorSelected(new com.pavelsikun.vintagechroma.OnColorSelectedListener({

                    onColorSelected: function (colorInt) {
                        console.log('color selected: ' + colorInt);
                    }

                }))
                .create();
            console.log('builder: ' + builder);

            builder.show(app.android.startActivity.getFragmentManager(), "ChromaDialog");

        } catch (err) {
            console.log(err);
        }
    }



}