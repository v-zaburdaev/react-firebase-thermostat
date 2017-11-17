import React from "react";
import {  Redirect } from "react-router-dom";

import firebase from "firebase";

class Registration extends React.Component{
	constructor(){
		super();
		this.state={
			loggedout: false,
			error: null
		}
		this.logout = this.logout.bind(this);
		this.seterr = this.seterr.bind(this);		
	}	

logout(){
	this.setState({loggedout: true});
}
seterr(e){
	this.setState({error: e});
}

	componentDidMount(){
		firebase.auth().signOut().then(this.logout).catch(this.seterr);
	}
	render(){
		if(this.state.loggedout){	
			return <Redirect to="/"/>;
		}
		if(this.state.error){
			return	<div> error logout {this.state.error}</div>;
		}
		return <div>Logging out....</div>;
	}
}

export default Registration;