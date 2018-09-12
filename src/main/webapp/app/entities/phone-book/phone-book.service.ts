import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IPhoneBook } from 'app/shared/model/phone-book.model';

type EntityResponseType = HttpResponse<IPhoneBook>;
type EntityArrayResponseType = HttpResponse<IPhoneBook[]>;

@Injectable({ providedIn: 'root' })
export class PhoneBookService {
    private resourceUrl = SERVER_API_URL + 'api/phone-books';

    constructor(private http: HttpClient) {}

    create(phoneBook: IPhoneBook): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(phoneBook);
        return this.http
            .post<IPhoneBook>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(phoneBook: IPhoneBook): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(phoneBook);
        return this.http
            .put<IPhoneBook>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IPhoneBook>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IPhoneBook[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(phoneBook: IPhoneBook): IPhoneBook {
        const copy: IPhoneBook = Object.assign({}, phoneBook, {
            dob: phoneBook.dob != null && phoneBook.dob.isValid() ? phoneBook.dob.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.dob = res.body.dob != null ? moment(res.body.dob) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((phoneBook: IPhoneBook) => {
            phoneBook.dob = phoneBook.dob != null ? moment(phoneBook.dob) : null;
        });
        return res;
    }
}
