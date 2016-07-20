/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/MrBIMC/VintageChroma
*************************************************************************************/

import { isAndroid } from "platform";
import { Color } from "color";
import * as app from "application";

declare var com: any;

const ChromaDialog = com.pavelsikun.vintagechroma.ChromaDialog;
const ColorMode = com.pavelsikun.vintagechroma.colormode.ColorMode;
const IndicatorMode = com.pavelsikun.vintagechroma.IndicatorMode;
const OnColorSelectedListener = com.pavelsikun.vintagechroma.OnColorSelectedListener;

export class ColorPicker {

    constructor() {
        if (!isAndroid) {
            console.log('Not supported for iOS');
            return;
        }
    }

    public show(initialColor: string = '#FF4081', colorMode: any = 'RGB') {
        return new Promise((resolve, reject) => {
            try {
                new ChromaDialog.Builder()
                    .initialColor(new Color(initialColor).android)
                    .colorMode(this._setColorMode(colorMode))
                    .indicatorMode(IndicatorMode.HEX)
                    .onColorSelected(new OnColorSelectedListener({
                        onColorSelected: function (colorInt) {
                            resolve(colorInt);
                        }
                    }))
                    .create()
                    .show(app.android.startActivity.getFragmentManager(), "ChromaDialog");
            } catch (err) {
                reject(err)
            }
        })
    }

    private _setColorMode(value: any): any {
        if (value === 'RGB') {
            return ColorMode.RGB;
        } else if (value === 'ARGB') {
            return ColorMode.ARGB;
        } else if (value === 'HSV') {
            return ColorMode.HSV;
        } else {
            return ColorMode.RGB;
        }
    }

}