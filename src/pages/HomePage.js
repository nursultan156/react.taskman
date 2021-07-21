import React from "react";
import {Col, Container, Row} from "react-grid-system";
import {Link} from "react-router-dom";
import "./HomePage.css";
import TaskTable from "../components/TaskTable";

export default class HomePage extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row className="home-page-nav-row">
                    <Col className="home-page-nav-col" >Task manager application</Col>
                    <Col className="home-page-nav-col" md="content" >
                        <Link to="/login">Login</Link>
                    </Col>
                </Row>
                <Row className="home-page-main-row">
                    <Col className="home-page-main-col" />
                    <Col className="home-page-main-col" md="content" >
                        <TaskTable/>
                    </Col>
                    <Col className="home-page-main-col" />
                </Row>
            </Container>
        );
    }

}