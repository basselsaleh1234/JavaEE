import axios from 'axios' 

 class HelloWorldService{
  
    excecuteHelloworldSevice(){
   
   return axios.get('http://localhost:8080/helloworld');

   

         //console.log('executed service');
    }
    excecuteHelloworldBeanSevice(){
   
      
   
      return axios.get('http://localhost:8080/hello-world-bean');
   
            //console.log('executed service');
       }


       excecuteHelloworldVariablePathSevice(name){
   
      
   
         return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`); //here just I put $ before the path variable---and one more thing I put ```
      
               //console.log('executed service');
          }

 }
 export default new HelloWorldService()