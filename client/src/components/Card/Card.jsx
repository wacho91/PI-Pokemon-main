import React from "react";

function Card({name, img, types}) {

    return (
        <div>
            <img src={img} alt="img"/>
            <h3>{name}</h3>
            <h5>{types[0]}</h5>
            <h5>{types[1]}</h5>
        </div>
    )
}

export default Card;