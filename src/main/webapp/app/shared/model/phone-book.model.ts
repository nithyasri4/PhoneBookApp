import { Moment } from 'moment';

export interface IPhoneBook {
    id?: number;
    name?: string;
    dob?: Moment;
    address?: string;
    email?: string;
    phoneNumber?: string;
    extension?: string;
    phoneType?: string;
}

export class PhoneBook implements IPhoneBook {
    constructor(
        public id?: number,
        public name?: string,
        public dob?: Moment,
        public address?: string,
        public email?: string,
        public phoneNumber?: string,
        public extension?: string,
        public phoneType?: string
    ) {}
}
