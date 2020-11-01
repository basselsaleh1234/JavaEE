import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}from 'react-router-dom'
import AuthenticationService from'./AuthenticationService.js'

//ReactRoot help us to go from one component to ohter component


//in this Component we have to check the User logged in or not to enable the home and  the telefonbuch tabs
 class  TelefonHeader extends Component{
    constructor(probs){
      super(probs)



    }


    
   render(){

    
    


      return(

   <header>


    <nav className="navbar navbar-expand-md navbar-darg bg-dark">
       <ul className="navbar-nav">
         <li> <Link  className="nav-link"to="/welcome/bassel">Home</Link></li>
        <li><Link className="nav-link" to="/telefonbuch/bassel">Telefonbuch</Link></li>
      </ul>
       <ul className="navbar-nav navbar-collapse justify-content-end"> {/* to make the log in and log out at the end */}
           
         <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>
       </ul>
    </nav>
       

            </header>
      )
   }

 }
 export default TelefonHeader;