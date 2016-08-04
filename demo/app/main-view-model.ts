import { Observable } from 'data/observable';
import { ColorPicker } from 'nativescript-color-picker';

var app = require('application');

export class HelloWorldModel extends Observable {
  public selectedColor: string;
  private _colorPicker: ColorPicker;

  constructor() {
    super();
    this._colorPicker = new ColorPicker();
    this.selectedColor = '';
  }

  public showARGBPicker() {
    this._colorPicker.show('#3489db', 'ARGB').then((result) => {
      this.set('selectedColor', result);
    }).catch((err) => {
      console.log(err)
    })
  }


  public showRGBPicker() {
    this._colorPicker.show('#333', 'RGB').then((result) => {
      this.set('selectedColor', result);
    }).catch((err) => {
      console.log(err)
    })
  }


  public showHSVPicker() {
    this._colorPicker.show('#fff000', 'HSV').then((result) => {
      this.set('selectedColor', result);
    }).catch((err) => {
      console.log(err)
    })
  }

  public showHEXPicker() {
    if(app.ios) {
      this._colorPicker.show('#fff000', 'HEX').then((result) => {
        this.set('selectedColor', result);
      }).catch((err) => {
        console.log(err)
      })
    }
  }

}