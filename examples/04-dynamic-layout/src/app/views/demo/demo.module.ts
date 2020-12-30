import {NgModule} from '@angular/core';

import {DemoRoutingModule} from "./demo.routing.module";
import {DemoComponent} from "./demo.component";
import {CommonModule} from "@angular/common";
import {AngularPaneManagerModule} from "@openopus/angular-pane-manager";

@NgModule({
  imports: [CommonModule, DemoRoutingModule, AngularPaneManagerModule],
    exports: [],
    declarations: [DemoComponent],
    providers: [],
})
export class DemoModule {
}
