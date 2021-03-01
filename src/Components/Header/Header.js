import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

// we cant use the link component provided by react-router-dom because of jsx element formatting issues
// so we use the LinkContainer component below so that we can integrate bootstrap to our react-router-dom
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <LinkContainer to="/">
                        <Navbar.Brand>Assessment</Navbar.Brand>
                    </LinkContainer>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
