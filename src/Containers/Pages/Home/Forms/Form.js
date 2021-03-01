import React, { Component } from 'react';
import BSForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <BSForm>
                    <BSForm.Row>
                        <Col>
                            <BSForm.Group>
                                <BSForm.Label>Full Name</BSForm.Label>
                                <BSForm.Control value={this.props.nameFieldValue} onChange={this.props.formHandler} name="name" type="text" placeholder="Enter full name." />
                            </BSForm.Group>
                        </Col>
                        <Col>
                            <BSForm.Group>
                                <BSForm.Label>Contact Number</BSForm.Label>
                                <BSForm.Control value={this.props.phoneFieldValue} onChange={this.props.formHandler} name="phone" type="text" placeholder="Enter contact number." />
                            </BSForm.Group>
                        </Col>
                    </BSForm.Row>
                    <Button disabled={this.props.formIsInvalid} variant="primary" type="submit" onClick={this.props.submit}>
                        Submit
                    </Button>
                    <Button variant="info" type="button" onClick={this.props.openCloseForm} style={{ float: 'right' }}>
                        Close Form
                    </Button>
                </BSForm>
            </React.Fragment>
        );
    }
}
export default Form;