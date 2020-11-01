import React, { Component } from 'react';
import {Form, Formik,Field, ErrorMessage} from 'formik';
import KontaktDataService from'../API/Telefonbuch/KontaktDataService'

//ReactRoot help us to go from one component to ohter component

 class  KontakComponent extends Component{
     constructor(props){
       super(props)
       this.hasNumber=this.hasNumber.bind(this)
       this.onSubmit=this.onSubmit.bind(this)
       this.validate=this.validate.bind(this)
      
       this.state={
   
         id :this.props.match.params.id,
         name:''
         , number:''

       }
     }
     //Note
//Note : we have to enable re-initialization in <Formik> to show the kontakt name and the kontakt number(I gave them from Backend) in their fields
//Note: by default take the formik intitial values (state values in our example) and if I want to update them I have to enable re-initialization
  componentDidMount(){
 if(this.state.id===-1){ return}
    KontaktDataService.retrieveOneKontaktDaten(this.props.match.params.name,this.props.match.params.id)
    .then(response=>this.setState({

     name:response.data.name,
     number:response.data.number

    }))

    
  }

      hasNumber(myString) {
        return /\d/.test(myString);
        
      }
     onSubmit(values){
       if(this.state.id===-1){

        KontaktDataService.createKontaktDaten(this.props.match.params.name,{
          id:this.state.id,
          name:values.name,
          number:values.number
        }).then(response=>this.props.history.push(`/telefonbuch/${this.props.match.params.name}`))
       }else{
    KontaktDataService.updateKontaktDaten(this.props.match.params.name,this.props.match.params.id,{
      id:this.state.id,
      name:values.name,
      number:values.number
    }).then(response=>this.props.history.push(`/telefonbuch/${this.props.match.params.name}`))
       
     }
    }

     validate(values){
         let errors={}
         if(!values.name){
             errors.name='Enter a name please'
         }else if(values.name.length>30){
             errors.name='please the maximum long of name is 30 Characters'

         } if(!values.number){ errors.number='you do not have to enter a number! '}
       else  if(!this.hasNumber(values.number)){  errors.number='you have entered Letters, please inter at least a number'}
       
    
   return errors

     }

//Formik provide a useful set of elements fieldsets to native validation and states manipulation ,submissions 
   render(){
       let {name,number}=this.state //better than i write two expressions,
    //   number=this.state.number

      return (
<>
        <div>
          <h1>Kontakt</h1>
           <div className="container">
               
   <Formik initialValues={{ name, number }} onSubmit={this.onSubmit} validate={this.validate} enableReinitialize={true}>   
       
     {  (props)=> (
              <Form>
                  <ErrorMessage name="name" component="div" className="alert alert-warnin"/>
                  <ErrorMessage name="number" component="div" className="alert alert-warnin"/>
                  <fieldset className="form-group">                                 
                      <label>name</label>
                       <Field className="form-control" type="text" name="name"/>
                  </fieldset>
                  <fieldset className="form-group">                                 
                      <label>number</label>
                       <Field className="form-control" type="text" name="number"/>
                  </fieldset>
           <button className="btn btn-success" type="submit">save</button>
              </Form>
                          )
                                  }
      </Formik> 

           </div>

            </div> </>
      );
   }

 }
 export default KontakComponent;