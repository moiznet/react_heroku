
import React from 'react';

import axios from 'axios';


  class noticia extends React.Component  {

 constructor(props) {
    super(props);
    this.state = { article: [], "new": {}};


 }

 componentDidMount() {
    axios.get(`http://iris.net.co/products/semana/items/620853`)
      .then(res => {

      	console.log(res.data);
        const article = res.data;
        this.setState({ article });
        this.setState({ "new": this.state.article.data });
       
       
        

      })
  }



    render() {



      return (

      	<ul>
      	<h1> Noticia  </h1>
      		<li>Id : {this.state.new.id}</li>
      		<li> About  : {this.state.new.about} </li>
      		<li> Title : {this.state.new.title}</li>
      		<li> Sumary : {this.state.new.summary}</li>
      	</ul>
       




   
      )
    }
  }
 
  export default noticia;