import React, {useState}from 'react';
import './App.scss';
import Clock from './components/clock';

function App() {
  const [setDays, setDaysState] = useState();
  const [setHours, setHoursState] = useState();
  const [setMinutes, setMinutesState] = useState();
  const [setSeconds, setSecondsState] = useState();

  let interval ;

  const startTimer = () => {
    const countDown = new Date ('Jully 4, 2022').getTime();
  }
  return (
    <div className="App">
     <Clock setDays={setDays} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} />
    </div>
  );
}

export default App;
