import React from "react";

class Push extends React.Component{

	decodeHash(hashstring) {
    var hash = {};
    var hash_tmp = hashstring.substring(1).split("&");
    hash_tmp.forEach(function(s) {
        var tmp1 = s.split("=");
        hash[tmp1[0]] = tmp1[1];
    });
    return hash;
	};


	constructor(){
		super();
		this.state={
				pushed:false
		};
	}
	componentDidMount(){           
		if(window.location.search){
			let data=this.decodeHash(window.location.search);
			if(data.hasOwnProperty("imei") && data.hasOwnProperty("t1") && data.hasOwnProperty("p1"))
				{	
						fetch("https://thermostat-7f419.firebaseio.com/logs/imei.json?auth=xfPoDbkzYN3d4NIeKcJTu9WFHopK0AGTgsxabvQC",{
								method: "POST",
								body:JSON.stringify({"date":new Date(),"t1":"10"}),
						})
						.then((a)=>{console.log(a);})
						.catch((e)=>{console.log(e);});
				}
		}
		

		


	
	}
	render(){
		return <div>Push</div>;
		}

}

export default Push;