import React, { Component } from 'react';
import BSTable from 'react-bootstrap/Table';
import { LinkContainer } from "react-router-bootstrap";

class Table extends Component {
    render() {
        return (
            <React.Fragment>
                <BSTable responsive size="sm" striped hover>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Full Name</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map((post, index) => (
                            <LinkContainer key={index} to={{ pathname: '/profile/' + post.id }}>
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.name}</td>
                                    <td>{post.phone}</td>
                                </tr>
                            </LinkContainer>
                        ))}
                    </tbody>
                </BSTable>

            </React.Fragment>
        );
    }
}

export default Table;
