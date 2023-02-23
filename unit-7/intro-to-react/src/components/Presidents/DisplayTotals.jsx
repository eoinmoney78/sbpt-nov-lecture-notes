import React from 'react';

function DisplayTotals(props) {
  const { name, count } = props;

  return (
    <React.Fragment>
      <p>{name} had a total vote count of {count}</p>
    </React.Fragment>
  );
}

export default DisplayTotals;