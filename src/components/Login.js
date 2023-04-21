import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


class LogIn extends Component {
    constructor () {
        super();
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false
        };
    }


    handleChange = (e) => {
        const updatedUser = {...this.state.user};
        updatedUser.userName = e.target.value;
        this.setState({user: updatedUser}) // update state
    }

    // store user data and redirect to /userProfile
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.user)
        this.setState({redirect: true})
    }



    render () {
        if (this.state.redirect) {
            return (<Redirect to="/userProfile"/>);
        }

        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Name</label>
                        <input type="text" name="userName" defaultValue={this.props.user.userName} 
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password"/>
                    </div>
                    <button>Log In</button>
                </form>
                <br/>
                <Link to="/">Return to Home</Link>
            </div>
        );
    }



}



export default LogIn;