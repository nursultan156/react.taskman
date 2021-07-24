import React from "react";
import "./LoginPage.css";
import LayoutLogin from "../layouts/LayoutLogin";
import Auth from "../components/Auth";

export default class LoginPage extends React.Component {

    render() {
        return (
            <LayoutLogin content={<Auth/>}/>
        );
    }

}