import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularPaneManagerModule} from '@openopus/angular-pane-manager';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";

/** The root module */
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AngularPaneManagerModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
