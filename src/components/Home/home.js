import React from 'react';
import './home.css';
import { BsArrowRight } from "react-icons/bs";
const Home = () => {
  return (
    <div className='intro'>
      <h1>Efficient Financial <br></br>Management <br></br><h2>Made Easy</h2></h1>
      <p>
      Effortless Finance Management: Budget Tracker App for <br></br>
      Tracking Expenses, Savings Goals, and Category Budgets with Ease!
        </p>
      <div className='call-to'>
        <button onClick={() => console.log('Sign Up clicked')}>Get started for free <BsArrowRight /></button>
      </div>
    </div>
  );
};

export default Home;
