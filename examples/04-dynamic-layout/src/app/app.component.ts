// tslint:disable component-selector no-magic-numbers
import {Component} from '@angular/core';
import {StorageMap} from '@ngx-pwa/local-storage';
import {
    headerStyle,
    LayoutBuilder,
    LayoutTemplate,
    LayoutType,
    PaneHeaderStyle,
    RootLayout,
    saveLayout,
} from '@openopus/angular-pane-manager';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

/** The root app component */
@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
    `,

})
export class AppComponent {

}
