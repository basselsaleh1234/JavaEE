import React, { Component } from 'react';
import KontaktDataService from '../API/Telefonbuch/KontaktDataService.js'
import 'bootstrap/dist/css/bootstrap.min.css';



//ReactRoot help us to go from one component to ohter component

 class  TelefonBuchComponents extends Component{
constructor(Props){
super(Props)
this.state={

    telfonbuch:   
    [ 
      
      
      
      
      //so I can make a list of Object telefonbook
      /*{id:1,name:'Bassel',number:'1712395311'},
      {id:1,name:'Bassel',number:'1712395311'},
      {id:1,name:'Bassel',number:'1712395311'},
      {id:1,name:'Bassel',number:'1712395311'}*/

    ],  message:null
}
this.addTodoClicked=this.addTodoClicked.bind(this)
this.refreshKontakDaten=this.refreshKontakDaten.bind(this)
this.deleteKontaktClicked=this.deleteKontaktClicked.bind(this)
this.updateKontaktClicked=this.updateKontaktClicked.bind(this)

}

componentDidMount(){//lifecycle method (the Constructor is called first,then render(),then the mounten(componentdidmounten)) and once the services called ,render call again render method

  this.refreshKontakDaten();
}
refreshKontakDaten(){
  KontaktDataService.retrieveallKontaktDaten(this.props.match.params.name)
   .then(
     response =>{ 
     this.setState({telfonbuch:response.data});
     
     //console.log(respnse)
    }
    )
}

deleteKontaktClicked(id){

  //console.log(id+""+this.props.match.params.name);
 KontaktDataService.deleteKontaktDAten(this.props.match.params.name,id)
 .then(
   response => {    
     this.setState({message:`Delete of kontakt ${id} Successful`})
     this.refreshKontakDaten();// I refresh the page just when there is a successfully response

  }
 )

}
updateKontaktClicked(id){

  this.props.history.push(`/telefonbuch/${this.props.match.params.name}/${id}`)
 //console.log('update'+id);


}
addTodoClicked(){

  this.props.history.push(`/telefonbuch/${this.props.match.params.name}/-1`)
 //console.log('create'+id);


}


   render(){

      return(

        <div>
              <h1> TelefonBuch</h1>
      {this.state.message&&<div class="alert alert-success">{this.state.message}</div>} {/*if the message is updated please show it (that's mean WHen I delete a number the message will be updated when it is updated I show it )*/}
              <table className="center">
                  <thead>
                      <tr>
                          <th>id</th>
                          <th>name</th>
                          <th>number</th>
                          <th>Update</th>
                          <th>Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                       {     
                           this.state.telfonbuch.map(      // loop here all the elements of List telefonbuch and show them in the table
                               eachperson=>                    //define a parameter represent an element of list of telefonbuch
                          <tr>
                                 <td className="td">{eachperson.id}</td>
                                   <td className="td">{eachperson.name}</td>
                                   <td className="td">{eachperson.number}</td>
                                   < td className="td"><button className="btn btn-success" onClick={()=>this.updateKontaktClicked(eachperson.id)}>Update</button></td>
                                  < td className="td"><button className="btn btn-warning" onClick={()=>this.deleteKontaktClicked(eachperson.id)}>Delete</button></td>
                          </tr>
                                     ) 
                            }
                  </tbody>
              </table>
              <div class="row">
                
     <button className="btn btn-success" style={{marginLeft:100}} onClick={this.addTodoClicked}>Add</button>
              </div>
         
            </div>
      )
   }

 }
 export default TelefonBuchComponents;