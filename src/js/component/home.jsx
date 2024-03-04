import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
		
	return (
		<div className="counter d-flex">
			<h1 className="m-5">{props.digito6}</h1>
			<h1 className="m-5">{props.digito5}</h1>
			<h1 className="m-5">{props.digito4}</h1>
			<h1 className="m-5">{props.digito3}</h1>
			<h1 className="m-5">{props.digito2}</h1>
			<h1 className="m-5">{props.digito1}</h1>
		</div>
	);
};

export default Home;
