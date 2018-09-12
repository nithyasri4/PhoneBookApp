import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhoneBook } from 'app/shared/model/phone-book.model';
import { PhoneBookService } from './phone-book.service';
import { PhoneBookComponent } from './phone-book.component';
import { PhoneBookDetailComponent } from './phone-book-detail.component';
import { PhoneBookUpdateComponent } from './phone-book-update.component';
import { PhoneBookDeletePopupComponent } from './phone-book-delete-dialog.component';
import { IPhoneBook } from 'app/shared/model/phone-book.model';

@Injectable({ providedIn: 'root' })
export class PhoneBookResolve implements Resolve<IPhoneBook> {
    constructor(private service: PhoneBookService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((phoneBook: HttpResponse<PhoneBook>) => phoneBook.body));
        }
        return of(new PhoneBook());
    }
}

export const phoneBookRoute: Routes = [
    {
        path: 'phone-book',
        component: PhoneBookComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'PhoneBooks'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'phone-book/:id/view',
        component: PhoneBookDetailComponent,
        resolve: {
            phoneBook: PhoneBookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PhoneBooks'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'phone-book/new',
        component: PhoneBookUpdateComponent,
        resolve: {
            phoneBook: PhoneBookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PhoneBooks'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'phone-book/:id/edit',
        component: PhoneBookUpdateComponent,
        resolve: {
            phoneBook: PhoneBookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PhoneBooks'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const phoneBookPopupRoute: Routes = [
    {
        path: 'phone-book/:id/delete',
        component: PhoneBookDeletePopupComponent,
        resolve: {
            phoneBook: PhoneBookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PhoneBooks'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
