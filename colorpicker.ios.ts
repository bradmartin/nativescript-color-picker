var frame = require("ui/frame");

import * as app from 'application';

import {Color} from 'color';

declare var MSColorSelectionViewController, MSColorSelectionViewControllerDelegate, NSObject;

export class ColorPicker {

    constructor() { }

    public show(initialColor: string = '#FF4081', colorMode: any = 'RGB') {
        return new Promise((resolve, reject) => {
            try {
                let colorPickerView = new MSColorSelectionViewController();
                colorPickerView.color = new Color(initialColor).ios;
                colorPickerView.delegate = NSObject.extend({
                    colorViewControllerDidChangeColor(colorViewCntroller, color) {
                        resolve(color);
                    }
                }, {
                    protocols: [MSColorSelectionViewControllerDelegate]
                }).alloc().init();
                frame.topmost().currentPage.ios.presentViewControllerAnimatedCompletion(colorPickerView, true, null);
            } catch(err) {
                reject(err);
            }
        });
    }

}
