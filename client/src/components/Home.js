import React, { Component } from 'react';
import Map from "./Map.js"

class Home extends Component {

	// Now export the above Map component into another component by passing the props values
	render() {
	  return(
		  <Map
	   google={this.props.google}
	   center={{lat: 18.5204, lng: 73.8567}}
	   height='300px'
	   zoom={15}
	  />
		)
	}
}

export default Home;