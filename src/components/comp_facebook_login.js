
import React from 'react';
import FacebookLogin from 'react-facebook-login';
 //import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
window.user = "juan";


  class faceLogin extends React.Component  {

 constructor(props) {
    super(props);
    this.state = {message: 'usuarion no logeado' , redirect: false};
    this.handleClick = this.handleClick.bind(this);

 }

  handleClick(response) {
      window.user = response.name;
      this.setState({message : response.name});
    this.setRedirect();
    
   console.log(this.state.message);
console.log(this.state.redirect);
  }

 
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/links' />
    }
  }








       

      


 


            



    render() {



      return (
       

       
           
        <div> 
        
 <div>
        {this.renderRedirect()}
      
       </div>
       
         <h2>Usuario: <h3>{this.state.message} </h3></h2>
         <FacebookLogin
    appId="426393757970751"
    autoLoad={false}
    fields="name,email,picture"
    //onClick={componentClicked}
    callback = {this.handleClick } />
        </div>
       



   
      )
    }
  }
 
  export default faceLogin;