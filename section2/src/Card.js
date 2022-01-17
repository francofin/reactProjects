import React from "react";

function Card(props){
    return(
    <div style={{width:350, height:500}}>
        <img className="card-img-top" src={props.card.image} style={{height:350}}/>
        <div className="card-body">
        <h5 className="card-title" style={{color:'black'}}>{props.card.specialty}</h5>
            <p className="card-text" style={{color:'black'}}>{props.card.text}</p>
        </div>
    </div>
    )
}

export default Card;