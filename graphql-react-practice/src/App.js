import React, { Component } from 'react';
import {Query,ApolloProvider } from 'react-apollo';
import ApolloClient  from 'apollo-boost';
import gql from "graphql-tag";
import FetchFantasyTeam from './connect.js';
import './App.css';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
// add ArrowUp icon to fontAwesome library
library.add(faArrowUp);


// create Apollo Client
const client = new ApolloClient({
	  uri: "/graphql" // add endpoint before "/graphql"
	});



// main components to show the data and handle screen events
class App extends Component {
	constructor() { 
        super(); 
  
       
        this.state = { 
        		intervalId: 0
        		
          
        };
    }
	

	
	scrollStep() {
	    if (window.pageYOffset === 0) {
	        clearInterval(this.state.intervalId);
	    }
	    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	  }
	  
	  scrollToTop() {
	    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
	    this.setState({ intervalId: intervalId });
	  }
	  
	
  render() {
	  
	
	  let team={"id":"118f812b-6505-4d01-8d62-4d9aab7592d4"};
	 
	  
	  let imgSrc="arrow.png";
	  let style={background:'url('+imgSrc+') no-repeat'}
    return (
      <div className="App">
      <div className="">
      <ApolloProvider client={client}>
      	<FetchFantasyTeam id={team.id}  />
      </ApolloProvider>
      	</div>
      	<div className=""><button title='Back to top' className='scroll' 
            onClick={ () => { this.scrollToTop(); }}>
      	<FontAwesomeIcon icon="arrow-up" />
           </button></div>
      </div>
    );
  }
}
export default App;
