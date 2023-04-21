import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';


class UserProfile extends Component {

    render() {
        return (
            <div>
                <h1>User Profile</h1>

                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <br/>
                <Link to="/">Return to Home</Link>
                <br/><br/>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}



export default UserProfile;