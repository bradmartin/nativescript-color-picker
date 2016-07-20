import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { Color } from "color";
import { isAndroid, device } from "platform";
import * as app from "application";
import { HelloWorldModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();


    if (isAndroid && device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new Color("#d3d3d3").android);
    }

}