import { Observable } from 'data/observable';
import { ColorPicker } from 'nativescript-color-picker';

export class HelloWorldModel extends Observable {
  public selectedColor: string;
  private _colorPicker: ColorPicker;

  constructor() {
    super();
    this._colorPicker = new ColorPicker();
    this.selectedColor = '';
  }


  public showPicker() {
    console.log('showPicker()');
    this._colorPicker.show();
  }


}