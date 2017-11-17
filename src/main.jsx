import React from "react";
import {  BrowserRouter as Router,  Route } from "react-router-dom";

import Home from "./Home";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import Lk from "./Lk/Lk";
import Push from "./Push/Push";
import firebase from "firebase";

 var config = {
    apiKey: "AIzaSyD60Lh8GUZX17lPGQD7ISqGdWVpP31NPpk",
    authDomain: "thermostat-7f419.firebaseapp.com",
    databaseURL: "https://thermostat-7f419.firebaseio.com",
    projectId: "thermostat-7f419",
    storageBucket: "thermostat-7f419.appspot.com",
    messagingSenderId: "440996268510"
  };
  firebase.initializeApp(config);


class App extends React.Component {
	constructor(){
		super();
		this.state={
			user:null
		};
		this.changeUser = this.changeUser.bind(this);
	}
	componentDidMount(){
		firebase.auth().onIdTokenChanged(this.changeUser);
	}

changeUser(user){
  if (user) {
    // User is signed in or token was refreshed.
		console.log(user);
		this.setState({user:user});
  } else{
		console.log("No auth");
		this.setState({user:null});
	}
}


	render(){
		return (
      <Router>
				<div>
      		<Route exact path="/" component={Home} />
      		<Route path="/reg" component={Registration} />
      		<Route path="/login" component={Login} />
      		<Route path="/logout" component={Logout} />
      		<Route path="/lk" component={Lk} />
      		<Route path="/push" component={Push} />


				</div>
			</Router>
		);
	}

}

export default App;
