import React, { Component } from 'react';
import LoginComponent from './Logincomponent'
import WelcomeComponent from './WelcomComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ErrorComponent from './errorComponent'
import TelefonBuchComponents from './telefonbuchComponents'
import LogOut from './logout'
import TelefonHeader from './Header'
import TelefonFooter from './Footer'
import KontakComponent from './KontaktComponent'
import AuthenticationService from'./AuthenticationService.js'



 
class Tbuch extends Component {
  render() {
    return (

      <div className="tbuch">
      
         <Router>
            <>
            <TelefonHeader/>
            <Switch> {/*to make just one of these Routers match . because sometimes match two routers */}
            <Route path="/login" component={LoginComponent}/>
          < Route path="/" exact component={LoginComponent}/> {/*exact here to not make the default page match all things */}
         
          <Route path="/telefonbuch/:name/:id" component={KontakComponent}/>
          <Route path="/telefonbuch/:name" component={TelefonBuchComponents}/>
          <Route path="/logout" component={LogOut}/>
         
          <Route path="/welcome/:name" component={WelcomeComponent}/> {/*I have added /:name here */}
          <Route component={ErrorComponent}/>
          </Switch>
          <TelefonFooter/>
          </>
          
         </Router>
         
      </div>
    );
  }
}
export default Tbuch;

