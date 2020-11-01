package com.basse.rest.webservices.demo.Kontakte;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



//localhost:8080/h2-console
//jdbc:h2:mem:testdb



//this interface I use it As Autowired in Resources to give us features like delete add update and insert
@Repository
public interface KontaktJpaRepository extends JpaRepository<Kontakte, Long> {

}
