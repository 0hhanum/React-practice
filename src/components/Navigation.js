import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    // Link 는 router 내에서만 사용가능 (App.js 에서 호출시 router 내에 존재)
    return <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation