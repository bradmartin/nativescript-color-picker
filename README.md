[![npm](https://img.shields.io/npm/v/nativescript-color-picker.svg)](https://www.npmjs.com/package/nativescript-color-picker)
[![npm](https://img.shields.io/npm/dt/nativescript-color-picker.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-color-picker)
[![Build Status](https://travis-ci.org/bradmartin/nativescript-color-picker.svg?branch=master)](https://travis-ci.org/bradmartin/nativescript-color-picker)
[![Twitter Follow][twitter-image]][twitter-url]

[twitter-image]: https://img.shields.io/twitter/follow/bradwaynemartin.svg?style=social&label=Follow%20me
[twitter-url]: https://twitter.com/bradwaynemartin

# NativeScript Color Picker

NativeScript plugin to show a color picker dialog.

## Sample Usage

| Sample Android                   | Sample iOS                                        |
| -------------------------------- | ------------------------------------------------- |
| ![Sample](./screens/cpicker.gif) | ![Sample iOS](./screens/mscolorpicker_update.gif) |

#### Native Library:

| Android                                                         | iOS                                                     |
| --------------------------------------------------------------- | ------------------------------------------------------- |
| [MrBIMC/VintageChroma](https://github.com/MrBIMC/VintageChroma) | [MSColorPicker](https://github.com/sgl0v/MSColorPicker) |
| ARGB, RGB, HSV                                                  | RGB                                                     |

## Installation

From your command prompt/terminal go to your app's root folder and execute:

`tns plugin add nativescript-color-picker`

## Usage

### XML

```XML
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded">
  <ActionBar title="Color Picker" />
  <StackLayout>
    <Button text="Show ARGB Picker" tap="{{ showARGBPicker }}" />
    <Button text="Show RGB Picker" tap="{{ showRGBPicker }}" />
    <Button text="Show HSV Picker" tap="{{ showHSVPicker }}" />
    <StackLayout orientation="horizontal">
      <Label text="Selected Color: " class="message" textWrap="true" />
      <Label text="{{ selectedColor }}" class="message" textWrap="true"/>
    </StackLayout>
  </StackLayout>
</Page>
```

### TS

```TS
import { ColorPicker } from 'nativescript-color-picker';

let picker = new ColorPicker();

 public showARGBPicker() {
    picker.show('#3489db', 'ARGB').then((result) => {
      console.log('color int: ' + result);
    }).catch((err) => {
      console.log(err)
    })
}

```

## API

Opens the color picker dialog.

- **show(initialColor?: string, colorMode?: string): Promise<number>**
  - ColorMode { 'ARGB', 'RGB', 'HSV' }

## Nativescript-Vue implementation

The nativescript vue implementation is slightly different due to the difference in the `.vue` template syntax.

### Install and clean

The install is the same, but be sure to run a clean of the platform directory after the plugin installation. If not, you could run into an error similar to this:

    [TypeError: Cannot read property 'ColorMode' of undefined]

Steps to install:

    # install the plugin
    npm install --save nativescript-color-picker

    # Clean out the platforms directory if you've been developing for android
    tns platform clean android
    # Clean out the platforms directory if you've been developing for ios
    tns platform clean ios

### Code sample

Once installed, you can pull in the module similar to the method noted above, the major difference being the template's tag directives for binding and events which are in the vue-style (e.g. `:text=""` to bind and `@tap=""` to listen):

    <template>
      <StackLayout>
        <ActionBar title="Color Picker"/>
        <Button text="Show RGB Picker" @tap="showColorPicker"/>
        <StackLayout orientation="horizontal">
          <Label class="selected-color">
            <FormattedString>
              <Span class="label" text="The selected color is: "/>
              <Span class="value" :style="valueColor" :text="selectedColor"/>
            </FormattedString>
          </Label>
        </StackLayout>
      </StackLayout>
    </template>

    <script>
    import { ColorPicker } from "nativescript-color-picker";
    import { Color } from "tns-core-modules/Color";

    export default {
      data() {
        return {
          picker: null,
          selectedColor: null
        };
      },
      computed: {
        valueColor() {
          return {
            color: this.selectedColor ? this.selectedColor.hex : ""
          };
        }
      },
      methods: {
        showColorPicker() {
          this.picker
            .show("#3489db", "RGB")
            .then(result => {
              this.selectedColor = new Color(result);
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      created() {
        this.picker = new ColorPicker();
      }
    };
    </script>

    <style lang='scss' scoped>
    .selected-color {
      .value {
        font-weight: bold;
        font-size: 50px;
      }
    }
    </style>
