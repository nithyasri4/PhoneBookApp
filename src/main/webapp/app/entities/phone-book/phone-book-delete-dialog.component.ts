import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPhoneBook } from 'app/shared/model/phone-book.model';
import { PhoneBookService } from './phone-book.service';

@Component({
    selector: 'jhi-phone-book-delete-dialog',
    templateUrl: './phone-book-delete-dialog.component.html'
})
export class PhoneBookDeleteDialogComponent {
    phoneBook: IPhoneBook;

    constructor(private phoneBookService: PhoneBookService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.phoneBookService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'phoneBookListModification',
                content: 'Deleted an phoneBook'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-phone-book-delete-popup',
    template: ''
})
export class PhoneBookDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ phoneBook }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(PhoneBookDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.phoneBook = phoneBook;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
