const functions = require('firebase-functions');
const express = require("express");
const firebase = require("firebase");


const app= express();

 var config = {
    apiKey: "AIzaSyD60Lh8GUZX17lPGQD7ISqGdWVpP31NPpk",
    authDomain: "thermostat-7f419.firebaseapp.com",
    databaseURL: "https://thermostat-7f419.firebaseio.com",
    projectId: "thermostat-7f419",
    storageBucket: "thermostat-7f419.appspot.com",
    messagingSenderId: "440996268510"
  };
  firebase.initializeApp(config);

	app.get("",(request, response)=>{
			let data={};

			Object.assign(data,request.query);
			if(data.hasOwnProperty("imei"))
				{	
						let imei=data.imei;
						delete data.imei;
						data["date"] = new Date().getTime();
						var newdata = firebase.database().ref("data/"+imei).push();
						newdata.set(data);
						
				}

    response.send(JSON.stringify(data));
});

exports.app = functions.https.onRequest(app);


