import React from "react";
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";
import firebase from "firebase";

class Registration extends React.Component{
	constructor(){
		super();
		this.state={
			login:"",
			password:"",
			error:null
		};
		this.handleChange= this.handleChange.bind(this);
		this.setError = this.setError.bind(this);
	}
	handleChange(e){
		let s={};
		s[e.target.name]=e.target.value;
		this.setState(s);
	}
	setError(e){
		this.setState({error: e});
	}
	onLogin(){
		let login=this.state.login;
		let password=this.state.password;
		firebase.auth().signInWithEmailAndPassword(login, password).catch(this.setError);
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
{this.state.error && <HelpBlock>{this.state.error.code}: {this.state.error.message}</HelpBlock>}
        </FormGroup>
				<Button onClick={this.onLogin.bind(this)}>Sign in</Button>
	</div>;
	}
}

export default Registration;