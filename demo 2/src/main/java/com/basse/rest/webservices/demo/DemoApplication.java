package com.basse.rest.webservices.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.bassel.rest.webservices.restfulwebservices.helloworld,com.basse.rest.webservices.demo.Kontakte"})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("Hallo this is the first app");
	}

}
