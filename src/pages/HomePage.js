import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends React.Component {

    render() {
        return (
            <>
                <div className="header">
                    <div className="navigation">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
                <div className="main">2</div>
                <div className="footer">3</div>
            </>
        );
    }

}