/*
Rei Imai
Assignment4: Bank of React

Need to edit this file
This is Credits component
*/



import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';



class Credits extends Component {

    constructor () {
        super();
        this.state = {
            description: '',
            amount: 0
        };
    }


    // caputure and update the state when input changes
    handleChangeDesc = (e) => {
        let updatedDescription = this.state.description;
        updatedDescription = e.target.value;
        this.setState({description: updatedDescription});
    }
    handleChangeNum = (e) => {
        let updatedAmount = this.state.amount;
        updatedAmount = Number(e.target.value); 
        this.setState({amount: updatedAmount});
    }


    // when user click Submit, set State to App.js creditList
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCredit(this.state.description, this.state.amount);
    }


    
    
    render () {
        //this.props.componentDidMountCredits();
        return (
            <div>
                <h1>Credits</h1>
                <br/>
                {this.props.credits.map( (credit) => {
                    return (
                        <div key={credit.id}>
                            <h3>Description: {credit.description}</h3>
                            <h3>Amount: ${Math.round((credit.amount + Number.EPSILON) * 100) / 100}</h3>
                            <h3>Date: {credit.date.substring(0,10)}</h3>
                            <p>---------------------------------</p>
                        </div>
                    );
                })}
                <br/>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="description" placeholder="description(text)" onChange={this.handleChangeDesc}/>
                <input type="number" step="0.01" name="amount" placeholder="amount(number)" onChange={this.handleChangeNum}/>
                <button type="submit" >Add Credit</button>
                </form>
                <br/>
                <Link to="/">Return to Home</Link>
                <br/><br/>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}


export default Credits;