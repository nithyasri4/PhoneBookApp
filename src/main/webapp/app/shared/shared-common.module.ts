import { NgModule } from '@angular/core';

import { PhoneBookAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PhoneBookAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PhoneBookAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PhoneBookAppSharedCommonModule {}
