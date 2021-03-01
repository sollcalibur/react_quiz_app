import React, { Component } from 'react';
import BSForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import { LinkContainer } from "react-router-bootstrap";

class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <BSForm>
                    <BSForm.Row>
                        <Col>
                            <BSForm.Group>
                                <BSForm.Label>Full Name</BSForm.Label>
                                <BSForm.Control onChange={this.props.formHandler} value={this.props.nameFieldValue} name="name" type="text" placeholder="Loading..." />
                            </BSForm.Group>
                        </Col>
                        <Col>
                            <BSForm.Group>
                                <BSForm.Label>Contact Number</BSForm.Label>
                                <BSForm.Control onChange={this.props.formHandler} value={this.props.phoneFieldValue} name="phone" type="text" placeholder="Loading..." />
                            </BSForm.Group>
                        </Col>
                    </BSForm.Row>
                    <Button disabled={this.props.formIsInvalid} variant="primary" onClick={this.props.update} type="submit">
                        Update
                    </Button>
                    &nbsp;
                    <Button variant="danger" onClick={this.props.delete} type="button">
                        Delete
                    </Button>
                    {/* <LinkContainer to={'/'} style={{ float: 'right' }}>
                        <Button variant="info" type="button">
                            Home
                        </Button>
                    </LinkContainer> */}
                </BSForm>
            </React.Fragment>
        );
    }
}
export default Form;