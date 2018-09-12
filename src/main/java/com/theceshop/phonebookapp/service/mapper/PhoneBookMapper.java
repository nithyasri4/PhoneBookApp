package com.theceshop.phonebookapp.service.mapper;

import com.theceshop.phonebookapp.domain.*;
import com.theceshop.phonebookapp.service.dto.PhoneBookDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity PhoneBook and its DTO PhoneBookDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PhoneBookMapper extends EntityMapper<PhoneBookDTO, PhoneBook> {



    default PhoneBook fromId(Long id) {
        if (id == null) {
            return null;
        }
        PhoneBook phoneBook = new PhoneBook();
        phoneBook.setId(id);
        return phoneBook;
    }
}
