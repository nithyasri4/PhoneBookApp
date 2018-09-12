import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPhoneBook } from 'app/shared/model/phone-book.model';

@Component({
    selector: 'jhi-phone-book-detail',
    templateUrl: './phone-book-detail.component.html'
})
export class PhoneBookDetailComponent implements OnInit {
    phoneBook: IPhoneBook;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ phoneBook }) => {
            this.phoneBook = phoneBook;
        });
    }

    previousState() {
        window.history.back();
    }
}
