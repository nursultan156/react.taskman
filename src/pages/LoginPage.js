import React from "react";
import {Col, Container, Row} from "react-grid-system";
import "./LoginPage.css";
import Auth from "../components/Auth";

export default class LoginPage extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row align="center" justify="center" direction="column">
                    <Col md={3} className="login-page-col">
                        <Auth/>
                    </Col>
                </Row>
            </Container>
        );
    }

}