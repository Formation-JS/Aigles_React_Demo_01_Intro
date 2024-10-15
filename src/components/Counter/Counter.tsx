import { useState } from 'react';

type CounterProps = {
  step?: number;
};

const Counter = ({ step = 1 }: CounterProps) => {

  const [theFinalCountdown, setTheFinalCountdown] = useState(0);
  const [msg, setMsg] = useState('Initial');

  const handleIncr = () => {
    console.log('Avant', theFinalCountdown);
    setTheFinalCountdown(prevCount => prevCount + step);
    setMsg('Incrementation');
    console.log('Après', theFinalCountdown);
  };

  const handleReset = () => {
    setTheFinalCountdown(0);
    setMsg('Reset !');
  };

  console.log('Render', theFinalCountdown);
  return (
    <>
      <p>{theFinalCountdown} ({msg})</p>
      <div>
        <button onClick={handleIncr}>+ {step}</button>
        {theFinalCountdown !== 0 && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    </>
  );
};

export default Counter;