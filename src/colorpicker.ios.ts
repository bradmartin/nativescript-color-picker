import { Color } from 'tns-core-modules/color';
import { topmost } from 'tns-core-modules/ui/frame';

class ColorPickerImpl extends NSObject {
  private _owner: WeakRef<ColorPicker>;

  public static initWithOwner(owner: WeakRef<ColorPicker>): ColorPickerImpl {
    const handler = ColorPickerImpl.new() as ColorPickerImpl;
    handler._owner = owner;
    return handler;
  }

  public dismissViewController(sender: any): void {
    const owner = this._owner.get();
    if (owner) {
      owner._dismissViewController(sender);
    }
  }

  public static ObjCExposedMethods = {
    dismissViewController: { returns: interop.types.void, params: [] }
  };
}

export class ColorPicker {
  public static COLOR: any;
  private _impl: ColorPickerImpl;

  private _doneResolve: Function;

  public show(initialColor: string = '#FF4081', colorMode: any = 'RGB') {
    return new Promise((resolve, reject) => {
      try {
        this._doneResolve = resolve;
        const colorSelectionController = new MSColorSelectionViewController(
          null
        );
        colorSelectionController.color = new Color(initialColor).ios;

        const navCtrl = UINavigationController.alloc().initWithRootViewController(
          colorSelectionController
        );

        const delegate = (NSObject as any)
          .extend(
            {
              colorViewControllerDidChangeColor(colorViewCntroller, color) {
                const components = CGColorGetComponents(color.CGColor);
                const red = lroundf(components[0] * 255);
                const green = lroundf(components[1] * 255);
                const blue = lroundf(components[2] * 255);
                const alpha = lroundf(components[3] * 255);
                switch (colorMode) {
                  case 'ARGB':
                    ColorPicker.COLOR = new Color(alpha, red, green, blue).argb;
                    break;
                  case 'RGB':
                    ColorPicker.COLOR = red + ', ' + green + ', ' + blue;
                    break;
                  case 'HEX':
                    ColorPicker.COLOR = this.rgb2hex(
                      red + ', ' + green + ', ' + blue + ', ' + alpha
                    );
                    break;
                  default:
                    ColorPicker.COLOR = undefined;
                    resolve('Not supported on iOS');
                    break;
                }
              },
              rgb2hex(rgb: string) {
                const match = rgb.match(
                  /[\s+]?[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/
                );
                return match && match.length === 4
                  ? '#' +
                      ('0' + parseInt(match[1], 10).toString(16)).slice(-2) +
                      ('0' + parseInt(match[2], 10).toString(16)).slice(-2) +
                      ('0' + parseInt(match[3], 10).toString(16)).slice(-2)
                  : '';
              }
            },
            {
              protocols: [MSColorSelectionViewControllerDelegate]
            }
          )
          .alloc()
          .init();
        colorSelectionController.delegate = delegate;

        this._impl = ColorPickerImpl.initWithOwner(new WeakRef(this));

        const doneBtn = UIBarButtonItem.alloc().initWithTitleStyleTargetAction(
          'Done',
          UIBarButtonItemStyle.Done,
          this._impl,
          'dismissViewController'
        );
        colorSelectionController.navigationItem.rightBarButtonItem = doneBtn;

        topmost().currentPage.ios.presentViewControllerAnimatedCompletion(
          navCtrl,
          true,
          null
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  _dismissViewController(sender) {
    if (this._doneResolve) {
      this._doneResolve(ColorPicker.COLOR);
    }
    topmost().currentPage.ios.dismissViewControllerAnimatedCompletion(
      true,
      null
    );
  }
}
