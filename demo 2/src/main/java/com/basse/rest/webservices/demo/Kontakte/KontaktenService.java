package com.basse.rest.webservices.demo.Kontakte;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class KontaktenService {
	
	
	private static List<Kontakte> kont=new ArrayList();
	
	private static long idCounter=0;
	
	static {
		
		
		kont.add(new Kontakte(++idCounter, "bassel","01712395311"));
		kont.add(new Kontakte(++idCounter, "Zaher","01712395311"));
		kont.add(new Kontakte(++idCounter, "Lina","01712395311"));
		kont.add(new Kontakte(++idCounter, "Awatif","01712395311"));
		
	}
	 public List<Kontakte> findAll(){
		 return kont;
	 }
	 
	 
	//to add or create kontakt
	 public Kontakte save(Kontakte kontakt) {
		 //the id of new object is 0 or -1
		   if(kontakt.getId()==-1 || kontakt.getId()==0) {
			    kontakt.setId(++idCounter);
			    kont.add(kontakt);
			   
		   }else {
			   deleteById(kontakt.getId());
			   kont.add(kontakt);
			   
		   }
		 
		 
		 
		 return kontakt;
	 }
	 
//to delete a kontakt	 
public Kontakte deleteById(long id) {
	Kontakte kontakt=findby(id);
	if(kontakt==null)return null;
	
	if( kont.remove(kontakt)) {
	 return kontakt;} 
	return null;
	 
}

public Kontakte findby(long id) {
    for(Kontakte k:kont) {
    	
    	if(k.getId()==id) {return k;}
    }
	return null;
}

}
