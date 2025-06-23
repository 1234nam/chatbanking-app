import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, onClick }) => (
  <div className="feature-card" onClick={onClick}>
    <span className="feature-icon">{icon}</span>
    <h3>{title}</h3>
  </div>
);

export default FeatureCard;
