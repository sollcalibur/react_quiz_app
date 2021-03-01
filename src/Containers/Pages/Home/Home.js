import React, { Component } from 'react';
import Persistence from '../../../Axios';
import Table from '../../../Containers/Pages/Home/Tables/Table';
import Form from '../../../Containers/Pages/Home/Forms/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import LoadingBar from 'react-redux-loading-bar';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userProfile: '',
            name: '',
            phone: '',
            formIsValid: true
        }
        this.onCloseForm = this.onCloseForm.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onFetchContacts();
    }

    onCloseForm(event) {
        this.props.onShowHideContactForm(this.props.showForm ? false : true)
    }

    onInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        let newPosts = this.state.posts;
        let inputData = { id: this.state.posts.length + 1, name: this.state.name, phone: this.state.phone };
        newPosts.push(inputData)
        this.setState({ posts: newPosts });

        //test
        console.log(newPosts);

        Persistence.post('/users', {
            name: this.state.name,
            phone: this.state.phone
        })
            .then(response => {
                alert('Status is: ' + response.status + ', Contact successfully added!')
            })
            .catch(error => {
                alert('There was an error.')
            });
        this.setState({ name: '', phone: '' });
    }

    render() {
        let formInvalidity;
        if (this.state.name.length < 5) {
            formInvalidity = true;
        } else {
            formInvalidity = false;
        }
        if (this.state.phone.length < 5) {
            formInvalidity = true;
        } else {
            formInvalidity = false;
        }
        let form = null;
        let formButton = (
            <Row>
                <Col>
                    <Button variant="info" type="button" onClick={this.onCloseForm} style={{ float: 'right' }}>Add Contact</Button>
                </Col>
            </Row>
        );
        if (this.props.showForm === true) {
            form =
                <Form
                    nameFieldValue={this.state.name}
                    phoneFieldValue={this.state.phone}
                    submit={this.onSubmit}
                    formHandler={this.onInputChange}
                    openCloseForm={this.onCloseForm}
                    formIsInvalid={formInvalidity}>
                </Form>;
            formButton = null;
        }
        let fetchError = null;
        if (this.props.error) {
            fetchError =
                <center><p>{this.props.error.message}</p></center>;
        }
        return (
            <React.Fragment>
                <LoadingBar style={{position: 'absolute', top: 0}} showFastActions />
                <Table posts={this.props.contacts}></Table>
                <hr></hr>
                {form}
                {formButton}
                {fetchError}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.home.contacts,
        loading: state.home.loading,
        error: state.home.error,
        showForm: state.home.showForm,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchContacts: () => dispatch(actions.fetchContacts()),
        onShowHideContactForm: (boolean) => dispatch(actions.showForm(boolean)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);