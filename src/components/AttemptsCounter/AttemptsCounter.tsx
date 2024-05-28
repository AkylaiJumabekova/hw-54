import React, { CSSProperties } from 'react';

interface AttemptsCounterProps {
  count: number;
}

const AttemptsCounter: React.FC<AttemptsCounterProps> = ({ count }) => {
  const stylesContainer: CSSProperties = {color: "green", fontWeight: 700};

  if (count > 20) {
    stylesContainer.color = "red";
  } else if (count > 10) {
    stylesContainer.color = "orange";
  } else {
    stylesContainer.color = "green";
  }

  return (
    <div>
      Attempts: <span style={stylesContainer}>{count}</span>
    </div>
  );
};

export default AttemptsCounter;
