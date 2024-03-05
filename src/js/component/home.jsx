import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
		


	return (
		<div className="counter d-flex flex-wrap justify-content-center align-items-center bg-black m-5">
    <div className="m-3 border border-white p-3 display-1 rounded text-light">
        <div className="calendar"><i className="far fa-clock"></i></div>
    </div>
    <div className="m-3 border border-white p-3 display-1 rounded text-light">{props.digito6}</div>
    <div className="m-3 border border-white p-3 display-1 rounded text-light">{props.digito5}</div>
    <div className="m-3 border border-white p-3 display-1 rounded text-light">{props.digito4}</div>
    <div className="m-3 border border-white p-3 display-1 rounded text-light">{props.digito3}</div>
    <div className="m-3 border border-white p-3 display-1 rounded text-light">{props.digito2}</div>
    <div className="m-3 border border-white p-3 display-1 rounded text-light">{props.digito1}</div>
</div>

	);
};

export default Home;
