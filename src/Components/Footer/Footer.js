import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <hr></hr>
                <Navbar sticky="bottom" >
                    All rights reserved lol
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Footer;
