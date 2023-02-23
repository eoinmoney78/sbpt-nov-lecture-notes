 /* 
  ! Challenge:
    - Create a new folder within the components folder called "Presidents"
      - Create a file called PresidentVotes.jsx
      - Create a file called DisplayTotals.jsx
    - Create a functional component within each that matches their file name.
      - Note: Don't forget to export!
    - PresidentVoting.jsx 
      - will import DisplayTotals.jsx
      - Will have an array to be passed as props (array supplied below)
      - will return a React.Fragment
        - Will have a h1 that will hold "Presidents"
        - Will map through the provided array and mount DisplayTotals with the values within each object.
          - Hint: Don't forget about a key.
    - DisplayTotals.jsx
      - Will return a React.Fragment that holds a paragraph tag that states "NAME had a total vote count of COUNT"
    - Import and mount within App.jsx under the Employee component.

    Array to pass through props:
    const votes = [
      { name: "Abe Lincoln", count: 139033},
      { name: "Stephen Douglas", count: 115509},
    ]
  */

import React from 'react';
import DisplayTotals from './DisplayTotals';

const votes = [
  { name: 'Abe Lincoln', count: 139033 },
  { name: 'Stephen Douglas', count: 115509 },
];

function PresidentVotes() {
  return (
    <React.Fragment>
      <h1>Presidents</h1>
      {votes.map((president) => (
        <DisplayTotals  name={president.name} count={president.count} />
      ))}
    </React.Fragment>
  );
}

export default PresidentVotes;