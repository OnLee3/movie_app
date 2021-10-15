import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation (){
    return <div className="header">
        <Link to="/" className="header__title">Home</Link>
        <Link to="/about" className="header__title">Leon</Link>
    </div>
}

export default Navigation;