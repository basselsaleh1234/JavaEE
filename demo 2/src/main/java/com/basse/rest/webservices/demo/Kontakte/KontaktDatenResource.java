package com.basse.rest.webservices.demo.Kontakte;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;






@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class KontaktDatenResource {
	
	@Autowired
	private KontaktenService kservice;
	
	//to return all Kontakte
	@GetMapping("/users/{username}/kontaktdaten")
	 public List<Kontakte> getAllKontakte(@PathVariable String username){  //return all Kontakte for a specifik User
		 
		 
		return kservice.findAll();
	 }
	
	//to return one kontakt
	@GetMapping("/users/{username}/kontaktdaten/{id}")
	 public Kontakte getOneKontakt(@PathVariable String username,@PathVariable long id){  //return all Kontakte for a specifik User
		 
		 
		return kservice.findby(id);
	 }
	
	//to delete kontakt by id
	@DeleteMapping("/users/{username}/kontaktdaten/{id}")
     public ResponseEntity<Void>  deleteKontakt( //represents Http response
    		            @PathVariable String username,@PathVariable long id){
    	 
    	 Kontakte kontakt=kservice.deleteById(id);
    	 if(kontakt!=null) { return ResponseEntity.noContent().build(); }
    	 return ResponseEntity.notFound().build();
     }

	//update Method
	
@PutMapping("/users/{username}/kontaktdaten/{id}")
public ResponseEntity<Kontakte>updateKontakt(@PathVariable String username,
		@PathVariable long id,@RequestBody Kontakte kontakt){
   
	Kontakte kontaktUpdated= kservice.save(kontakt);
	
	return new ResponseEntity<Kontakte>(kontakt,HttpStatus.OK);

         }
//Create 
// We don't have Id in URl , we make the Id here
@PostMapping("/users/{username}/kontaktdaten")
public ResponseEntity<Void>createKontakt(@PathVariable String username,@RequestBody Kontakte kontakt){
   //we want to return the Location of the created Resource 
	//so we Want current resource URL
	//and we append {id}
	
	Kontakte createdKontakt= kservice.save(kontakt);
	
	URI uri=ServletUriComponentsBuilder.
			fromCurrentRequest().path("{id}").buildAndExpand(createdKontakt.getId()).toUri(); //we append the id of the object we created to the local url and we will  return int 
	
	return  ResponseEntity.created(uri).build(); // it return the status of created object and returns the URL

         }
	
}
