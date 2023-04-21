import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';



class App extends Component {

  constructor() {
    super();
    this.state = {
      accountBalance: 1234567.89,
      currentUser: {
        userName: 'Rei Imai',
        memberSince: '11/22/99',
      }
    };
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }



  render() {

    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance}/>
    );
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince}/>
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}/>
    );


    return(
      <Router basename="/bank-of-react">
        <div className = "App">
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
