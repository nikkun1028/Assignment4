import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

import axios from 'axios'; // for HTTP requests (APIs)




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
    this.componentDidMountCredits();

  }    
  
  

  // API call to get creditList data
  async componentDidMountCredits() {
    let linkToAPI = "https://johnnylaicode.github.io/api/credits.json";

    // check if API call success
    try {
        let response = await axios.get(linkToAPI);
        this.setState({creditList: response.data});

    }
    catch (error) {
        if(error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        }
    }
  }


  



  // function used in Login.js
  // Update state's userName after Log In button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }



  // function to calculate total sum of Credits
  // accumulate all amount value from API endpoint


  // function to calculate total sum of Debits
  // accumulate all amount value from API endpoint







  // top-level rendering starts here;
  render() {

    // crete React elements and pass input to componenets
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance}/>
    );
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince} 
      accountBalance={this.state.accountBalance}/>
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} 
      mockLogIn={this.mockLogIn}
      accountBalance={this.state.accountBalance}/>
    );
    const CreditsComponent = () => (
      <Credits credits={this.state.creditList}
      accountBalance={this.state.accountBalance}/>
    );
    const DebitsComponent = () => (
      <Debits debits={this.state.debitList}
      accountBalance={this.state.accountBalance}/>
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
  } // render() end;


} // class App end;

export default App;
