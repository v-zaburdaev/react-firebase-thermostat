import React from "react";
import {  Link } from "react-router-dom";

class Home extends React.Component{
	render(){
		return <div>
			<li><Link to="/home">1home</Link></li>
			<li><Link to="/reg">Registration</Link></li>
			<li><Link to="/login">Login</Link></li>
			<li><Link to="/logout">Logout</Link></li>
		</div>;
	}
}

export default Home;