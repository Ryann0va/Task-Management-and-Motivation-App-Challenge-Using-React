//U99350821
import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
      <FancyText title="true" text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>
        &copy; 2024 Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
