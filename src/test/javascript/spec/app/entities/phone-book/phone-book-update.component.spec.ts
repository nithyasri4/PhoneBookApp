/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PhoneBookAppTestModule } from '../../../test.module';
import { PhoneBookUpdateComponent } from 'app/entities/phone-book/phone-book-update.component';
import { PhoneBookService } from 'app/entities/phone-book/phone-book.service';
import { PhoneBook } from 'app/shared/model/phone-book.model';

describe('Component Tests', () => {
    describe('PhoneBook Management Update Component', () => {
        let comp: PhoneBookUpdateComponent;
        let fixture: ComponentFixture<PhoneBookUpdateComponent>;
        let service: PhoneBookService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PhoneBookAppTestModule],
                declarations: [PhoneBookUpdateComponent]
            })
                .overrideTemplate(PhoneBookUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PhoneBookUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PhoneBookService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new PhoneBook(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.phoneBook = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new PhoneBook();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.phoneBook = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
