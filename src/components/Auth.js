import React from "react";
import "./Auth.css";

export default class Auth extends React.Component {

    render() {
        return (
            <div className="auth-wrapper">
                <p>
                    <b>Login:</b>
                    <br/>
                    <input type="text"/>
                </p>
                <p>
                    <b>Password:</b>
                    <br/>
                    <input type="password"/>
                </p>
                <p>
                    <input type="button" value="Send"/>
                </p>
            </div>
        );
    }

}