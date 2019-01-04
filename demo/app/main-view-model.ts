import { ColorPicker } from 'nativescript-color-picker';
import { Observable } from 'tns-core-modules/data/observable';
import { isIOS } from 'tns-core-modules/platform';

export class HelloWorldModel extends Observable {
  public selectedColor: string;
  private _colorPicker: ColorPicker;

  constructor() {
    super();
    this._colorPicker = new ColorPicker();
    this.selectedColor = '';
  }

  public showARGBPicker() {
    this._colorPicker
      .show('#3489db', 'ARGB')
      .then(result => {
        this.set('selectedColor', result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public showRGBPicker() {
    this._colorPicker
      .show('#333', 'RGB')
      .then(result => {
        this.set('selectedColor', result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public showHSVPicker() {
    this._colorPicker
      .show('#fff000', 'HSV')
      .then(result => {
        this.set('selectedColor', result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public showHEXPicker() {
    if (isIOS) {
      this._colorPicker
        .show('#fff000', 'HEX')
        .then(result => {
          this.set('selectedColor', result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
