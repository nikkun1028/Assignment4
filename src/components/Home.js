import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';



class Home extends Component {
    render() {
        return(
            <div>
                <img src="https://picsum.photos/200/200" alt="bank"/>
                <h1>Bank of React</h1>

                <Link to="/userProfile">User Profile</Link>
                <br/>
                <Link to="/login">Login</Link>
                <br/>

                <br/><br/>
                <AccountBalance accountBalance={this.props.accountBalance}/>

            </div>
        );
    }
}


export default Home;