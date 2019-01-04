import * as app from 'tns-core-modules/application';
import { Color } from 'tns-core-modules/color';
import { EventData } from 'tns-core-modules/data/observable';
import { device, isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  const page = args.object as Page;
  page.bindingContext = new HelloWorldModel();

  if (isAndroid && device.sdkVersion >= '21') {
    const window = app.android.startActivity.getWindow();
    window.setStatusBarColor(new Color('#d3d3d3').android);
  }
}
