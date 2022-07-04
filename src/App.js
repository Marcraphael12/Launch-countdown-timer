import React, {useState}from 'react';
import './App.scss';
import Clock from './components/clock';

function App() {
  const [setDays, setDaysState] = useState();
  const [setHours, setHoursState] = useState();
  const [setMinutes, setMinutesState] = useState();
  const [setSeconds, setSecondsState] = useState();

  return (
    <div className="App">
     <Clock />
    </div>
  );
}

export default App;
