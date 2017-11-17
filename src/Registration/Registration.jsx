import React from "react";
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";
import firebase from "firebase";

class Registration extends React.Component{
	constructor(){
		super();
		this.state={
			login:"",
			password:""
		};
	this.handleChange= this.handleChange.bind(this);
	}
	handleChange(e){
		let s={};
		s[e.target.name]=e.target.value;
		this.setState(s);
	}
	onLogin(){
		let login=this.state.login;
		let password=this.state.password;
		firebase.auth().createUserWithEmailAndPassword(login, password).catch(function(error) {
		  // Handle Errors here.
			// var errorCode = error.code;
  		// var errorMessage = error.message;
		  // ...
			});
		}
	render(){
		return <div>Registration
             <FormGroup>
          <ControlLabel>Login</ControlLabel>
          <FormControl
            type="text"
						name="login"
            value={this.state.login}
            placeholder="Enter login"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
             <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
						name="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
				<Button onClick={this.onLogin.bind(this)}>Sign in</Button>
	</div>;
	}
}

export default Registration;