import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';



class App extends Component {

  // create and initialize state
  constructor() {
    super();
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Rei Imai',
        memberSince: '11/22/99',
      }
    };
  }



  // function used in Login.js
  // Update state's userName after Log In button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }






  // top-level rendering starts here;
  render() {

    // crete React elements and pass input to componenets
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
    const CreditsComponent = () => (
      <Credits credits={this.state.creditList}/>
    );
    const DebitsComponent = () => (
      <Debits debits={this.state.debitList}/>
    );


    // Routes to each components
    return(
      <Router basename="/Assignment4">
        <div className = "App">
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
