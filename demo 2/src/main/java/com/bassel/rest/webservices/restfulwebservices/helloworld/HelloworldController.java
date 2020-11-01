package com.bassel.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin(origins = "http://localhost:4200") // to tell Spring boot that this URL want to make http request and give him permission
public class HelloworldController {

	@GetMapping(path="/helloworld")
	public String helloWord() {
		return "Hello Bassel wlooo";
	}
	
	@GetMapping(path="/hello-world-bean") //this converted into Jason and bring back
	public HelloworldBean helloWordBean() {
		return new HelloworldBean("Hello World Bean");
	}
	
	@GetMapping(path="/hello-world/path-variable/{name}") //this converted into Jason and bring back
	public HelloworldBean helloWordpathvariable(@PathVariable String name) {
		//throw new RuntimeException("something went wrrong");
		return new HelloworldBean("Hello World Bean"+"  "+name);
	}
}

