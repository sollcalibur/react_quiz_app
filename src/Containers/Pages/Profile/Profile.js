import React, { Component } from 'react';
import Form from '../../Pages/Profile/Forms/Form';
import Persistence from '../../../Axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: '',
            serverError: '',
            userId: 0,
            name: '',
            phone: '',
            pageUpdated: false,
            formIsValid: true
        }
        this.onDeleteProfile = this.onDeleteProfile.bind(this);
        this.onUpdateProfile = this.onUpdateProfile.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        Persistence.get('/users/' + this.props.match.params.userId)
            .then(response => {
                this.setState({ userProfile: response.data, name: response.data.name, phone: response.data.phone });
            })
            .catch(error => {
                this.setState({ serverError: error });
            });
    }

    onUpdateProfile(event) {
        event.preventDefault();
        Persistence.put('/users/' + this.props.match.params.userId, {
            name: this.state.name,
            phone: this.state.phone
        })
            .then(response => {
                this.setState({ pageUpdated: true });
                if (this.state.pageUpdated === true) {
                    this.props.history.push('/')
                }
                alert('Status is: ' + response.status + ', Contact successfully updated!')
            })
            .catch(error => {
                alert('There was an error.')
            });
    }

    onDeleteProfile(event) {
        Persistence.delete('/users/' + this.props.match.params.userId)
            .then(response => {
                this.setState({ pageUpdated: true });
                if (this.state.pageUpdated === true) {
                    this.props.history.push('/')
                }
                alert('Status is: ' + response.status + ', Contact successfully deleted!')
            })
            .catch(error => {
                alert('There was an error.')
            });
    }

    onInputChange(event) {
        // array of element input name attribute. [name, phone]
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
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
        return (
            <React.Fragment>
                <Form
                    nameFieldValue={this.state.name}
                    phoneFieldValue={this.state.phone}
                    formHandler={this.onInputChange}
                    update={this.onUpdateProfile}
                    delete={this.onDeleteProfile}
                    formIsInvalid={formInvalidity}>
                </Form>
            </React.Fragment>
        );
    }
}
export default Profile;