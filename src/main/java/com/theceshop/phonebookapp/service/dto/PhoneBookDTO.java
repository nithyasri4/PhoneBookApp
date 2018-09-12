package com.theceshop.phonebookapp.service.dto;

import java.time.ZonedDateTime;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the PhoneBook entity.
 */
public class PhoneBookDTO implements Serializable {

    private Long id;

    private String name;

    private ZonedDateTime dob;

    private String address;

    private String email;

    @NotNull
    private String phoneNumber;

    private String extension;

    private String phoneType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ZonedDateTime getDob() {
        return dob;
    }

    public void setDob(ZonedDateTime dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getPhoneType() {
        return phoneType;
    }

    public void setPhoneType(String phoneType) {
        this.phoneType = phoneType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        PhoneBookDTO phoneBookDTO = (PhoneBookDTO) o;
        if (phoneBookDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), phoneBookDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "PhoneBookDTO{" +
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
