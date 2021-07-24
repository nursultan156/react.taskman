import React from "react";
import {Col, Container, Row} from "react-grid-system";
import "./LayoutLogin.css";

export default class LayoutLogin extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row align="center" justify="center" direction="column">
                    <Col md={3} className="layout-login-page-col">
                        {this.props.content}
                    </Col>
                </Row>
            </Container>
        );
    }

}