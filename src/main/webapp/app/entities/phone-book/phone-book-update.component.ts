import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IPhoneBook } from 'app/shared/model/phone-book.model';
import { PhoneBookService } from './phone-book.service';

@Component({
    selector: 'jhi-phone-book-update',
    templateUrl: './phone-book-update.component.html'
})
export class PhoneBookUpdateComponent implements OnInit {
    private _phoneBook: IPhoneBook;
    isSaving: boolean;
    dob: string;

    constructor(private phoneBookService: PhoneBookService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ phoneBook }) => {
            this.phoneBook = phoneBook;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.phoneBook.dob = moment(this.dob, DATE_TIME_FORMAT);
        if (this.phoneBook.id !== undefined) {
            this.subscribeToSaveResponse(this.phoneBookService.update(this.phoneBook));
        } else {
            this.subscribeToSaveResponse(this.phoneBookService.create(this.phoneBook));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IPhoneBook>>) {
        result.subscribe((res: HttpResponse<IPhoneBook>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get phoneBook() {
        return this._phoneBook;
    }

    set phoneBook(phoneBook: IPhoneBook) {
        this._phoneBook = phoneBook;
        this.dob = moment(phoneBook.dob).format(DATE_TIME_FORMAT);
    }
}
