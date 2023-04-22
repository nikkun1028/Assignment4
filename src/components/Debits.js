/* 
Rei Imai
Assignment4: Bank of React

Need to edit this file
This is Debits component
*/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

/*

const Debits = (props) => {
    // Create the list of Debit items
    let debitsView = () => {
      const { debits } = props;
      return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
        let date = debit.date.slice(0,10);
        return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
      });
    }
*/


class Debits extends Component {

    constructor () {
        super();
        this.state = {
            description: '',
            amount: 0
        };
    }



    // capture and update state when input changes
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


    // when user click Submit, set State to App.js debitList
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addDebit(this.state.description, this.state.amount);
    }



    // Render the list of Debit items and a form to input new Debit item
    render() { 

        return (
        <div>
            <h1>Debits</h1>
            <br/>
            {this.props.debits.map( (debit) => {
                return (
                    <div key={debit.id}>
                        <h3>Description: {debit.description}</h3>
                        <h3>Amount: ${Math.round((debit.amount + Number.EPSILON) * 100) / 100}</h3>
                        <h3>Date: {debit.date.substring(0,10)}</h3>
                        <p>---------------------------------</p>
                    </div>
                );
            })};
            <br/>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="description" placeholder="description(text)" onChange={this.handleChangeDesc}/>
            <input type="number" step="0.01" name="amount" placeholder="amount(number)" onChange={this.handleChangeNum}/>
            <button type="submit">Add Debit</button>
            </form>
            <br/>
            <Link to="/">Return to Home</Link>
            <br/><br/>
            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
        );
    }
}


export default Debits;