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
    // Render the list of Debit items and a form to input new Debit item
    render() { 
        return (
        <div>
            <h1>Debits</h1>
  

            <form onSubmit={this.props.addDebit}>
            <input type="text" name="description"/>
            <input type="number" name="amount" />
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