import { browser, ExpectedConditions as ec, protractor } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { PhoneBookComponentsPage, PhoneBookDeleteDialog, PhoneBookUpdatePage } from './phone-book.page-object';

describe('PhoneBook e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let phoneBookUpdatePage: PhoneBookUpdatePage;
    let phoneBookComponentsPage: PhoneBookComponentsPage;
    let phoneBookDeleteDialog: PhoneBookDeleteDialog;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load PhoneBooks', async () => {
        await navBarPage.goToEntity('phone-book');
        phoneBookComponentsPage = new PhoneBookComponentsPage();
        expect(await phoneBookComponentsPage.getTitle()).toMatch(/Phone Books/);
    });

    it('should load create PhoneBook page', async () => {
        await phoneBookComponentsPage.clickOnCreateButton();
        phoneBookUpdatePage = new PhoneBookUpdatePage();
        expect(await phoneBookUpdatePage.getPageTitle()).toMatch(/Create or edit a Phone Book/);
        await phoneBookUpdatePage.cancel();
    });

    it('should create and save PhoneBooks', async () => {
        await phoneBookComponentsPage.clickOnCreateButton();
        await phoneBookUpdatePage.setNameInput('name');
        expect(await phoneBookUpdatePage.getNameInput()).toMatch('name');
        await phoneBookUpdatePage.setDobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await phoneBookUpdatePage.getDobInput()).toContain('2001-01-01T02:30');
        await phoneBookUpdatePage.setAddressInput('address');
        expect(await phoneBookUpdatePage.getAddressInput()).toMatch('address');
        await phoneBookUpdatePage.setEmailInput('email');
        expect(await phoneBookUpdatePage.getEmailInput()).toMatch('email');
        await phoneBookUpdatePage.setPhoneNumberInput('phoneNumber');
        expect(await phoneBookUpdatePage.getPhoneNumberInput()).toMatch('phoneNumber');
        await phoneBookUpdatePage.setExtensionInput('extension');
        expect(await phoneBookUpdatePage.getExtensionInput()).toMatch('extension');
        await phoneBookUpdatePage.setPhoneTypeInput('phoneType');
        expect(await phoneBookUpdatePage.getPhoneTypeInput()).toMatch('phoneType');
        await phoneBookUpdatePage.save();
        expect(await phoneBookUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    it('should delete last PhoneBook', async () => {
        const nbButtonsBeforeDelete = await phoneBookComponentsPage.countDeleteButtons();
        await phoneBookComponentsPage.clickOnLastDeleteButton();

        phoneBookDeleteDialog = new PhoneBookDeleteDialog();
        expect(await phoneBookDeleteDialog.getDialogTitle()).toMatch(/Are you sure you want to delete this Phone Book?/);
        await phoneBookDeleteDialog.clickOnConfirmButton();

        expect(await phoneBookComponentsPage.countDeleteButtons()).toBe(nbButtonsBeforeDelete - 1);
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
