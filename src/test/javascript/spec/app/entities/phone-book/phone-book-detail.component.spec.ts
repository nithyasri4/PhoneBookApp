/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PhoneBookAppTestModule } from '../../../test.module';
import { PhoneBookDetailComponent } from 'app/entities/phone-book/phone-book-detail.component';
import { PhoneBook } from 'app/shared/model/phone-book.model';

describe('Component Tests', () => {
    describe('PhoneBook Management Detail Component', () => {
        let comp: PhoneBookDetailComponent;
        let fixture: ComponentFixture<PhoneBookDetailComponent>;
        const route = ({ data: of({ phoneBook: new PhoneBook(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PhoneBookAppTestModule],
                declarations: [PhoneBookDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(PhoneBookDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PhoneBookDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.phoneBook).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
