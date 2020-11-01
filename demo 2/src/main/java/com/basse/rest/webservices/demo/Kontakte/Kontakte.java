package com.basse.rest.webservices.demo.Kontakte;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Kontakte {
	
	
	@Id
	@GeneratedValue
	private Long  id;
	
	private String name;
	private String number;
	//
	//
	//
	// if you want to have something as a request body(update object),
	//then you'd need to have a default Constructor
	//
	//
	//
	protected Kontakte() {}
	
	
	public Kontakte(long id, String name, String number) {
		super();
		this.id = id;
		this.name = name;
		this.number = number;
	}
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
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	
	
	
	
	

	
	
	
	
	


}
