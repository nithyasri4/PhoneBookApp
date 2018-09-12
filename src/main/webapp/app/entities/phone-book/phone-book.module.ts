import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhoneBookAppSharedModule } from 'app/shared';
import {
    PhoneBookComponent,
    PhoneBookDetailComponent,
    PhoneBookUpdateComponent,
    PhoneBookDeletePopupComponent,
    PhoneBookDeleteDialogComponent,
    phoneBookRoute,
    phoneBookPopupRoute
} from './';

const ENTITY_STATES = [...phoneBookRoute, ...phoneBookPopupRoute];

@NgModule({
    imports: [PhoneBookAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PhoneBookComponent,
        PhoneBookDetailComponent,
        PhoneBookUpdateComponent,
        PhoneBookDeleteDialogComponent,
        PhoneBookDeletePopupComponent
    ],
    entryComponents: [PhoneBookComponent, PhoneBookUpdateComponent, PhoneBookDeleteDialogComponent, PhoneBookDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhoneBookAppPhoneBookModule {}
