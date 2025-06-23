import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ChatWindow from './Components/ChatWindow';
import FeatureCard from './Components/FeatureCard';
import CreditCardStatement from './Components/CreditCardStatement';
import LoanEMIDetails from './Components/LoanEMIDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>💬 ChatBanking</h1>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/credit-card-statement" element={<CreditCardStatement />} />
        <Route path="/loan-emi" element={<LoanEMIDetails />} />
        <Route path="/savings-account" element={<SavingsAccount />} />
         <Route path="/instant-alerts" element={<InstantAlerts />} />

      </Routes>
    </div>
  );
}

function MainPage() {
  const features = [
    {
      icon: '💳',
      title: 'Credit Card Statement',
      link: '/credit-card-statement'
    },
    {
  icon: '🧮',
  title: 'Loan EMI',
 link: '/loan-emi'
}, {
    icon: '📊',
    title: 'Savings Account',
    link: '/savings-account'   // new route path
  },
  {
    icon: '🔔',
    title: 'Instant Alerts',
    link: '/instant-alerts'    // new route path
  },
];
  

  return (
    <>
      <div className="feature-grid">
        {features.map((feature, i) => (
          <Link key={i} to={feature.link} style={{ textDecoration: 'none' }}>
            <FeatureCard icon={feature.icon} title={feature.title} />
          </Link>
        ))}
      </div>
      <ChatWindow />
    </>
  );
}const SavingsAccount = () => (
  <div style={{ padding: 20 }}>
    <h2>📊 Savings Account</h2>
    <p>This is your Savings Account page.</p>
  </div>
);

const InstantAlerts = () => (
  <div style={{ padding: 20 }}>
    <h2>🔔 Instant Alerts</h2>
    <p>This is your Instant Alerts page.</p>
  </div>
);


export default App;
