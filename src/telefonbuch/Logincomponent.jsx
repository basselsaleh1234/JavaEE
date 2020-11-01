import React, { Component } from 'react';
import AuthenticationService from'./AuthenticationService.js'



class LoginComponent extends Component{
    constructor(probs){
         super(probs)
         this.state={  
             username:'adesso Tbuch',   //in this way i make the user name a --cotroled field-- ()
             password:'',

             failedtologin:false ,
             sucessfultologin:false

         }
this.updateTheStateOfUserNameandpassowrd=this.updateTheStateOfUserNameandpassowrd.bind(this)
this.loginclick=this.loginclick.bind(this)
    }

    //what to do when I push the button

    loginclick(){    //I have made two states to log in and they change depending on username and password
    // bassel,springboot
    if(this.state.username==='bassel'&&this.state.password==='springboot'){

      AuthenticationService.RegisterSuccessfulLogin(this.state.username,this.state.password)
   this.props.history.push(`/welcome/${this.state.username}`) //this history is a dependency for ReactRouter
       //  this.setState({ failedtologin:false })
         //this.setState({ sucessfultologin:true })

    } else {
       
            this.setState({ failedtologin:true })
           this.setState({ sucessfultologin:false })

         
     }

    }

    // method to update state of the username and password when it is changed
    updateTheStateOfUserNameandpassowrd(event){ //when there is a change in username or passowrd, i update the state and view it into the value of password or username
      this.setState({
        [event.target.name] //this take the name from the field I type into it , I don't have to make a method for each one
         :event.target.value
      })
    }
    
      

    render(){
        
       return(
         <div>
           <h1>Login</h1>
           <div class="container">
             <br/>
    Username : <input type="text" name="username" value={this.state.username} onChange={this.updateTheStateOfUserNameandpassowrd}/> {/*give a default value to the username from state*/}
    Kennwort : <input type="password" name="password" value={this.state.password} onChange={this.updateTheStateOfUserNameandpassowrd}/>
    <button onClick={this.loginclick}>login</button>
    <br/>  <br/>  <br/>
     
    {this.state.failedtologin&&<div>sorry Username or Password is wrong try one more time</div>} {/*this is a javascript expression : if it is true then execute the second  */}
    {this.state.sucessfultologin&&<div>you are logged in successfully</div>}
    </div>  
    </div>
       )
    
  
    }
   
  
  
  } export default LoginComponent;

/*
  function TypeMessageForfailedLogIn(probs){
     if(probs.failedtologinstatus)
     { 
     return <div> Sorry username or password is wrong try on more time </div> 
    }
     return null
             

  }

  function TypeMessageforsucessefullyLogIn(probs){
    if(probs.sucessfultologinstatus)  //successfultologinstatues is an attribute above the the function in main I can use it here as probs.attribute
    { 
    return <div> you are logged in </div> 
}
    return null
            

 }*/

