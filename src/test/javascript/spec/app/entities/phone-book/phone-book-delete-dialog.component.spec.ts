/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PhoneBookAppTestModule } from '../../../test.module';
import { PhoneBookDeleteDialogComponent } from 'app/entities/phone-book/phone-book-delete-dialog.component';
import { PhoneBookService } from 'app/entities/phone-book/phone-book.service';

describe('Component Tests', () => {
    describe('PhoneBook Management Delete Component', () => {
        let comp: PhoneBookDeleteDialogComponent;
        let fixture: ComponentFixture<PhoneBookDeleteDialogComponent>;
        let service: PhoneBookService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PhoneBookAppTestModule],
                declarations: [PhoneBookDeleteDialogComponent]
            })
                .overrideTemplate(PhoneBookDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PhoneBookDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PhoneBookService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
