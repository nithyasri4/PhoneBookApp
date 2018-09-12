import { element, by, ElementFinder } from 'protractor';

export class PhoneBookComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-phone-book div table .btn-danger'));
    title = element.all(by.css('jhi-phone-book div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getText();
    }
}

export class PhoneBookUpdatePage {
    pageTitle = element(by.id('jhi-phone-book-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    dobInput = element(by.id('field_dob'));
    addressInput = element(by.id('field_address'));
    emailInput = element(by.id('field_email'));
    phoneNumberInput = element(by.id('field_phoneNumber'));
    extensionInput = element(by.id('field_extension'));
    phoneTypeInput = element(by.id('field_phoneType'));

    async getPageTitle() {
        return this.pageTitle.getText();
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async setDobInput(dob) {
        await this.dobInput.sendKeys(dob);
    }

    async getDobInput() {
        return this.dobInput.getAttribute('value');
    }

    async setAddressInput(address) {
        await this.addressInput.sendKeys(address);
    }

    async getAddressInput() {
        return this.addressInput.getAttribute('value');
    }

    async setEmailInput(email) {
        await this.emailInput.sendKeys(email);
    }

    async getEmailInput() {
        return this.emailInput.getAttribute('value');
    }

    async setPhoneNumberInput(phoneNumber) {
        await this.phoneNumberInput.sendKeys(phoneNumber);
    }

    async getPhoneNumberInput() {
        return this.phoneNumberInput.getAttribute('value');
    }

    async setExtensionInput(extension) {
        await this.extensionInput.sendKeys(extension);
    }

    async getExtensionInput() {
        return this.extensionInput.getAttribute('value');
    }

    async setPhoneTypeInput(phoneType) {
        await this.phoneTypeInput.sendKeys(phoneType);
    }

    async getPhoneTypeInput() {
        return this.phoneTypeInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class PhoneBookDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-phoneBook-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-phoneBook'));

    async getDialogTitle() {
        return this.dialogTitle.getText();
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
