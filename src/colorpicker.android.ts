/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/MrBIMC/VintageChroma
*************************************************************************************/

import { Color } from "tns-core-modules/color";
import * as app from "tns-core-modules/application";

declare var com: any;

const ChromaDialog = com.pavelsikun.vintagechroma.ChromaDialog;
const ColorMode = com.pavelsikun.vintagechroma.colormode.ColorMode;
const IndicatorMode = com.pavelsikun.vintagechroma.IndicatorMode;
const OnColorSelectedListener =
  com.pavelsikun.vintagechroma.OnColorSelectedListener;

export class ColorPicker {
  constructor() {}

  public show(initialColor: string = "#FF4081", colorMode: any = "RGB") {
    return new Promise((resolve, reject) => {
      try {
        debugger;
        const cMode = this._getColorMode(colorMode);
        console.log(`cMode`, cMode);
        
        const dialog = new ChromaDialog.Builder()
          .initialColor(new Color(initialColor).android)
          .colorMode(cMode)
          .indicatorMode(IndicatorMode.HEX)
          .onColorSelected(
            new OnColorSelectedListener({
              onColorSelected: function(colorInt) {
                resolve(colorInt);
              }
            })
          )
          .create();

        console.log(`dialog`, dialog);
        dialog.show(
          app.android.foregroundActivity.getFragmentManager(),
          "ChromaDialog"
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  private _getColorMode(value: any): any {
    switch (value) {
      case "RGB":
        return ColorMode.RGB;
      case "ARGB":
        return ColorMode.ARGB;
      case "HSV":
        return ColorMode.HSV;
      default:
        return ColorMode.RGB;
    }
    // if (value === "RGB") {
    //   return ColorMode.RGB;
    // } else if (value === "ARGB") {
    //   return ColorMode.ARGB;
    // } else if (value === "HSV") {
    //   return ColorMode.HSV;
    // } else {
    //   return ColorMode.RGB;
    // }
  }
}
