import axios from 'axios' 


class KontaktDataService{


    retrieveallKontaktDaten(name){
   
        return axios.get(`http://localhost:8080/jpa/users/${name}/kontaktdaten`);
     
        
     
              //console.log('executed service');
         }

         deleteKontaktDAten(name,id){
   //http://localhost:8080/users/bassel/kontaktdaten/1
            return axios.delete(`http://localhost:8080/jpa/users/${name}/kontaktdaten/${id}`);
         
            
         
                  //console.log('executed service');
             }

             retrieveOneKontaktDaten(name,id){
                  //http://localhost:8080/users/bassel/kontaktdaten/1
                           return axios.get(`http://localhost:8080/jpa/users/${name}/kontaktdaten/${id}`);
                        
                           
                        
                                 //console.log('executed service');
                            }
// update the kontakt
      updateKontaktDaten(name,id,Kontakt){
           //http://localhost:8080/users/bassel/kontaktdaten/1
        return axios.put(`http://localhost:8080/jpa/users/${name}/kontaktdaten/${id}`,Kontakt);
                                    
                                       
                                    
              //console.log('executed service');
          }

          createKontaktDaten(name,Kontakt){
            //http://localhost:8080/users/bassel/kontaktdaten/1
         return axios.post(`http://localhost:8080/jpa/users/${name}/kontaktdaten/`,Kontakt);
                                     
                                        
                                     
               //console.log('executed service');
           }


}



export default new KontaktDataService