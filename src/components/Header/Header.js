import React from "react";
import "./Header.css";
const Header = (props) => (
    <div className="container col-lg-12 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary col-lg-12">
            <h3 className="col-lg-3">Clicky Game</h3>
            <h3 className="col-lg-4" style={{color:props.color}}>{props.info}</h3>
            <div className="col-lg-1"></div> 
            <h3 className="col-lg-4">Score:{props.count} <span> </span>Top Score:{props.topScore}</h3>
        </nav>
    </div>

);
export default Header;
