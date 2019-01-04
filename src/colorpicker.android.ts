/***************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * https://bradmartin.net
 * Open Source Lib : https://github.com/MrBIMC/VintageChroma
 *************************************************************************************/

import * as app from 'tns-core-modules/application';
import { Color } from 'tns-core-modules/color';

declare var com: any;

export class ColorPicker {
  constructor() {}

  public show(initialColor: string = '#FF4081', colorMode: any = 'RGB') {
    return new Promise((resolve, reject) => {
      try {
        const cMode = this._getColorMode(colorMode);
        new com.pavelsikun.vintagechroma.ChromaDialog.Builder()
          .initialColor(new Color(initialColor).android)
          .colorMode(cMode)
          .indicatorMode(com.pavelsikun.vintagechroma.IndicatorMode.HEX)
          .onColorSelected(
            new com.pavelsikun.vintagechroma.OnColorSelectedListener({
              onColorSelected: colorInt => {
                resolve(colorInt);
              }
            })
          )
          .create()
          .show(
            (app.android
              .foregroundActivity as android.support.v7.app.AppCompatActivity).getSupportFragmentManager(),
            'ChromaDialog'
          );
      } catch (err) {
        reject(err);
      }
    });
  }

  private _getColorMode(value: any): any {
    switch (value) {
      case 'RGB':
        return com.pavelsikun.vintagechroma.colormode.ColorMode.RGB;
      case 'ARGB':
        return com.pavelsikun.vintagechroma.colormode.ColorMode.ARGB;
      case 'HSV':
        return com.pavelsikun.vintagechroma.colormode.ColorMode.HSV;
      default:
        return com.pavelsikun.vintagechroma.colormode.ColorMode.RGB;
    }
  }
}
