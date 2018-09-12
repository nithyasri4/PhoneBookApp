package com.theceshop.phonebookapp.service;

import com.theceshop.phonebookapp.service.dto.PhoneBookDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing PhoneBook.
 */
public interface PhoneBookService {

    /**
     * Save a phoneBook.
     *
     * @param phoneBookDTO the entity to save
     * @return the persisted entity
     */
    PhoneBookDTO save(PhoneBookDTO phoneBookDTO);

    /**
     * Get all the phoneBooks.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<PhoneBookDTO> findAll(Pageable pageable);


    /**
     * Get the "id" phoneBook.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<PhoneBookDTO> findOne(Long id);

    /**
     * Delete the "id" phoneBook.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
