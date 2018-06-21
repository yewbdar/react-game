import React from "react";
import "./Title.css";

const Title = (props) => {
return(
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 >count:{props.count}</h3>
        </nav>
    </div>
)
}

export default Title;
