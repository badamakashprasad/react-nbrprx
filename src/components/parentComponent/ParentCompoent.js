import React, { useState } from 'react';
import ButtonCounter from './components/parentComponent/ButtonCounter';
function ParentComponent() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  CounterOne = () => {
    console.log('rendering by counter one');
    setCountOne(countOne + 1);
  };

  CounterTwo = () => {
    console.log('rendering by counter two');
    setCountTwo(countTwo + 1);
  };

  return (
    <div>
      <h4>Counter One is : {countOne}</h4>
      <h4>Counter Two is : {countTwo}</h4>
      <ButtonCounter handleCounter={CounterOne}>
        Click for Counter One
      </ButtonCounter>
      <ButtonCounter handleCounter={CounterTwo}>
        Click for Counter Two
      </ButtonCounter>
    </div>
  );
}
