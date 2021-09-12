import React from 'react';

function ButtonCounter({ handleCounter, children }) {
  return (
    <div>
      <button OnClick={handleCounter}>{children}</button>
    </div>
  );
}
