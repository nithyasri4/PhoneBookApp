package com.theceshop.phonebookapp.repository;

import com.theceshop.phonebookapp.domain.PhoneBook;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the PhoneBook entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PhoneBookRepository extends JpaRepository<PhoneBook, Long> {

}
