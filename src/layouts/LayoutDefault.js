import React from "react";
import {Col, Container, Row} from "react-grid-system";
import "./LayoutDefault.css";

export default class LayoutDefault extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row className="layout-default-nav-row">
                    <Col className="layout-default-nav-col" >
                        {this.props.navLeft}
                    </Col>
                    <Col className="layout-default-nav-col" md="content" >
                        {this.props.navRight}
                    </Col>
                </Row>
                <Row className="layout-default-main-row">
                    <Col className="layout-default-main-col" />
                    <Col className="layout-default-main-col" md="content" >
                        {this.props.content}
                    </Col>
                    <Col className="layout-default-main-col" />
                </Row>
            </Container>
        );
    }

}