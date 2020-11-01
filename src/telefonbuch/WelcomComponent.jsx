import React, { Component } from 'react';
import {Link}from 'react-router-dom'
import HelloWorldService from '../API/Telefonbuch/Helloworldservice.js'
import './tbuchc.css'

//ReactRoot help us to go from one component to ohter component

 class  WelcomeComponent extends Component{
constructor(props){
super(props)

this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
 this.state={
    welcomeMessage:''


 }
 this.loginclick=this.loginclick.bind(this)
 this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
 this.handelerror=this.handelerror.bind(this)
}
loginclick(){
   this.props.history.push(`/telefonbuch/${this.props.match.params.name}`)
}

   render(){

      return(
        <>
       

        <div className="container">
            Welcom {this.props.match.params.name} {/*we give the name here from the url to match it and I made in the URL /:name and push it in it a state.name *_-*/}
            <br/> <br/> 
          {/*<Link to="/telefonbuch">click here to go to manage your Telephonbook</Link>*/}
            <button onClick={this.loginclick}>Go to your telefenbuch</button>
            </div>

            <div className="container">
            <br/>
            Click here to get a customized Welcom Message
            <br/>
            <button onClick={this.retrieveWelcomeMessage}>Get a message from Server</button>{/*once I click the Button I will make HTTP Request using Axios */}
            </div>
            <div className="container">
            <br/>
          {this.state.welcomeMessage}  {/*I have made a state here to store in it a message when the connection is available and when i get a response--- I store data in it using the Method down handleSuccessRespnse */}
            </div>
            </>
      )
   }

   retrieveWelcomeMessage(){
  
  
    HelloWorldService.excecuteHelloworldVariablePathSevice(this.props.match.params.name)    //I sent the name I path here ,from the log in component 
    .then(response => this.handleSuccessfulResponse(response) )   //when I get a response I send it to handelsuccesfulResponse to store it in a state  
    .catch(error=>this.handelerror(error))
   }
   handleSuccessfulResponse(response){
    this.setState({
   welcomeMessage:response.data.message   //When I get a response I store the data in the state Welcomemessage and show it in the screen


    })
   }
   handelerror(error){
      //console.log(error.response)
      this.setState({
   welcomeMessage:error.response.data.message   //When I get a response I store the data in the state Welcomemessage and show it in the screen
  
  // I get the error message from the Browser "something went wring" 
      })
     }

 }
 export default WelcomeComponent;