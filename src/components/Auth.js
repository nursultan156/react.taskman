import React from "react";
import {Container, Row, Col} from 'react-grid-system';
import "./Auth.css";

export default class Auth extends React.Component {

    render() {
        return (

            <Container fluid>
                <Row align="center" justify="center" direction="column">
                    <Col xs={3} className="auth-col">

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

                    </Col>
                </Row>
            </Container>
        );
    }

}