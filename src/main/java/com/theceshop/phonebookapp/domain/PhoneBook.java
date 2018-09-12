package com.theceshop.phonebookapp.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A PhoneBook.
 */
@Entity
@Table(name = "phone_book")
public class PhoneBook implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "dob")
    private ZonedDateTime dob;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "extension")
    private String extension;

    @Column(name = "phone_type")
    private String phoneType;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public PhoneBook name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ZonedDateTime getDob() {
        return dob;
    }

    public PhoneBook dob(ZonedDateTime dob) {
        this.dob = dob;
        return this;
    }

    public void setDob(ZonedDateTime dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public PhoneBook address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public PhoneBook email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public PhoneBook phoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getExtension() {
        return extension;
    }

    public PhoneBook extension(String extension) {
        this.extension = extension;
        return this;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getPhoneType() {
        return phoneType;
    }

    public PhoneBook phoneType(String phoneType) {
        this.phoneType = phoneType;
        return this;
    }

    public void setPhoneType(String phoneType) {
        this.phoneType = phoneType;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PhoneBook phoneBook = (PhoneBook) o;
        if (phoneBook.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), phoneBook.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "PhoneBook{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", dob='" + getDob() + "'" +
            ", address='" + getAddress() + "'" +
            ", email='" + getEmail() + "'" +
            ", phoneNumber='" + getPhoneNumber() + "'" +
            ", extension='" + getExtension() + "'" +
            ", phoneType='" + getPhoneType() + "'" +
            "}";
    }
}
