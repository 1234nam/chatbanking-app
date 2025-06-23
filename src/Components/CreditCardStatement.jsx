import React from 'react';
import './CreditCardStatement.css';

const CreditCardStatement = () => {
  const statementData = {
    name: "Namratha D A",
    cardNumber: "**** **** **** 1234",
    dueDate: "25 June 2025",
    statementDate: "01 June 2025",
    totalDue: "₹8,250",
    minimumDue: "₹2,000",
    transactions: [
      { date: "02 Jun", desc: "Amazon Purchase", amount: "₹1,200" },
      { date: "05 Jun", desc: "Zomato", amount: "₹450" },
      { date: "12 Jun", desc: "Uber Ride", amount: "₹320" },
      { date: "18 Jun", desc: "Myntra", amount: "₹2,800" },
      { date: "22 Jun", desc: "Flipkart", amount: "₹3,480" }
    ]
  };

  return (
    <div className="statement-card">
      <h2>💳 Credit Card Statement</h2>
      <p><strong>Cardholder:</strong> {statementData.name}</p>
      <p><strong>Card:</strong> {statementData.cardNumber}</p>
      <p><strong>Statement Date:</strong> {statementData.statementDate}</p>
      <p><strong>Due Date:</strong> {statementData.dueDate}</p>
      <p><strong>Total Due:</strong> {statementData.totalDue}</p>
      <p><strong>Minimum Due:</strong> {statementData.minimumDue}</p>

      <h3>📋 Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {statementData.transactions.map((txn, idx) => (
            <tr key={idx}>
              <td>{txn.date}</td>
              <td>{txn.desc}</td>
              <td>{txn.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreditCardStatement;
