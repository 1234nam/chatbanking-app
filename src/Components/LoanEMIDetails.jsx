import React from 'react';
import './LoanEMIDetails.css';

const LoanEMIDetails = () => {
  const loanInfo = {
    loanType: "Personal Loan",
    loanAmount: "₹1,00,000",
    monthlyEMI: "₹2,500",
    nextDue: "5 July 2025",
    remainingEMIs: 12,
    interestRate: "12% per annum",
    status: "Active",
    summary: [
      { month: "June", status: "Paid" },
      { month: "July", status: "Upcoming" },
      { month: "August", status: "Pending" }
    ]
  };

  return (
    <div className="loan-emi-container">
      <h2>🧮 Loan EMI Details</h2>
      <p><strong>Loan Type:</strong> {loanInfo.loanType}</p>
      <p><strong>Total Loan:</strong> {loanInfo.loanAmount}</p>
      <p><strong>Monthly EMI:</strong> {loanInfo.monthlyEMI}</p>
      <p><strong>Next Due Date:</strong> {loanInfo.nextDue}</p>
      <p><strong>Remaining EMIs:</strong> {loanInfo.remainingEMIs}</p>
      <p><strong>Interest Rate:</strong> {loanInfo.interestRate}</p>
      <p><strong>Status:</strong> {loanInfo.status}</p>

      <h3>📋 Payment Summary</h3>
      <ul>
        {loanInfo.summary.map((item, idx) => (
          <li key={idx}>{item.month} - {item.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoanEMIDetails;
