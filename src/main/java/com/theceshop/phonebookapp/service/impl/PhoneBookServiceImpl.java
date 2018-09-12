package com.theceshop.phonebookapp.service.impl;

import com.theceshop.phonebookapp.service.PhoneBookService;
import com.theceshop.phonebookapp.domain.PhoneBook;
import com.theceshop.phonebookapp.repository.PhoneBookRepository;
import com.theceshop.phonebookapp.service.dto.PhoneBookDTO;
import com.theceshop.phonebookapp.service.mapper.PhoneBookMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;
/**
 * Service Implementation for managing PhoneBook.
 */
@Service
@Transactional
public class PhoneBookServiceImpl implements PhoneBookService {

    private final Logger log = LoggerFactory.getLogger(PhoneBookServiceImpl.class);

    private final PhoneBookRepository phoneBookRepository;

    private final PhoneBookMapper phoneBookMapper;

    public PhoneBookServiceImpl(PhoneBookRepository phoneBookRepository, PhoneBookMapper phoneBookMapper) {
        this.phoneBookRepository = phoneBookRepository;
        this.phoneBookMapper = phoneBookMapper;
    }

    /**
     * Save a phoneBook.
     *
     * @param phoneBookDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public PhoneBookDTO save(PhoneBookDTO phoneBookDTO) {
        log.debug("Request to save PhoneBook : {}", phoneBookDTO);
        PhoneBook phoneBook = phoneBookMapper.toEntity(phoneBookDTO);
        phoneBook = phoneBookRepository.save(phoneBook);
        return phoneBookMapper.toDto(phoneBook);
    }

    /**
     * Get all the phoneBooks.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<PhoneBookDTO> findAll(Pageable pageable) {
        log.debug("Request to get all PhoneBooks");
        return phoneBookRepository.findAll(pageable)
            .map(phoneBookMapper::toDto);
    }
    
    /**
     * Get one phoneBook by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PhoneBookDTO> findOne(Long id) {
        log.debug("Request to get PhoneBook : {}", id);
        return phoneBookRepository.findById(id)
            .map(phoneBookMapper::toDto);
    }

    /**
     * Delete the phoneBook by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PhoneBook : {}", id);
        phoneBookRepository.deleteById(id);
    }
}
