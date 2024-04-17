import React from "react";

function Card({content, type}) {
    return(<div className="card" data-display={`${type}`}>
        {content}
    </div>)
}

export default Card;