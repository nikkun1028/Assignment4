import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

import axios from 'axios'; // for HTTP requests (APIs)
import { castArray } from 'lodash';




class App extends Component {

  // create and initialize state
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Rei Imai',
        memberSince: '11/22/99',
      }
    };
    this.componentDidMountCredits();
    this.componentDidMountDebits();


    //this.updateBalance();

    // although API data is successfully presented on the website,
    // it result 0, because it says creditList & debitList arrays are both
    // empty and udefined at this point (very weird). 
    // it works perfectly fine after you enter an input to either
    // Credit or Debit, then the balance will be correct all the way afterwards.
    
    // I couldn't figure out why the arrays are empty even though
    // it's successfully retrieved from the API endpoints.
    // Couldn't find out how to put the correct balance in the
    // beggining of lauching the webpage.
    // very sad.
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

  // API call to get debitList data
  async componentDidMountDebits() {
    let linkToAPI = "https://johnnylaicode.github.io/api/debits.json";

    // check if API call success
    try {
      let response = await axios.get(linkToAPI);
      this.setState({debitList: response.data});
    }
    catch (error) {
      if(error.response) {
        console.log(error.response.data);
        console.log(error.response.status);      }
    }

  }




  // function to update account balance
  updateBalance = () => {
      let newBalance = this.calcTotalCredits() - this.calcTotalDebits();
      //console.log(this.state.debitList.length);
      this.setState({accountBalance: newBalance});
  }

  // function to calculate and update total Credits
  calcTotalCredits = () => {
    let sum = 0;
    for(let i = 0; i < this.state.creditList.length; i++){
      sum += Number(this.state.creditList[i].amount);
      //console.log(this.state.creditList[i].description);
    }
    return sum;
  }  
  // function to calculate total Debits
  calcTotalDebits = () => {
    let sum = 0;
    for(let i = 0; i < this.state.debitList.length; i++){
      sum += Number(this.state.debitList[i].amount);
    }
    return sum;
  }
  



  // function used in Login.js
  // Update state's userName after Log In button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }



  // function to add a credit input into creditList array
  // should update the account balance also
  addCredit = (descInput, amountInput) => {
    //const newList = {...this.state.creditList};
    const newDate = new Date();
    const year = newDate.toLocaleString("en-GB", {year: "numeric"});
    const month = newDate.toLocaleString("en-GB", {month: "2-digit"});
    const day = newDate.toLocaleString("en-GB", {day: "2-digit"});
    const credit = {
      id: this.state.creditList.length + 1,
      description: descInput,
      amount: amountInput,
      date: year + "-" + month + "-" + day
    };

   
    this.state.creditList.push(credit);
    this.setState({creditList: this.state.creditList});
    this.updateBalance();
  }

  // function to add a debit input into debitList array
  // should update the account balance also
  addDebit = (descInput, amountInput) => {
    //const newList = {...this.state.debitList};
    const newDate = new Date();
    const year = newDate.toLocaleString("en-GB", {year: "numeric"});
    const month = newDate.toLocaleString("en-GB", {month: "2-digit"});
    const day = newDate.toLocaleString("en-GB", {day: "2-digit"});
    const debit = {
      id: this.state.debitList.length + 1,
      description: descInput,
      amount: amountInput,
      date: year + "-" + month + "-" + day
    };

    this.state.debitList.push(debit);
    this.setState({debitList: this.state.debitList});
    this.updateBalance();
  }








  // top-level rendering starts here;
  render() {

    // crete React elements and pass input to componenets
    const CreditsComponent = () => (
      <Credits credits={this.state.creditList}
      addCredit={this.addCredit}
      accountBalance={this.state.accountBalance}/>
    );
    const DebitsComponent = () => (
      <Debits debits={this.state.debitList}
      addDebit={this.addDebit}
      accountBalance={this.state.accountBalance}/>
      
    );
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance}
      updateBalance={this.updateBalance}/>
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
