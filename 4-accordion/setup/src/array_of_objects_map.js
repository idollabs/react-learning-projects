import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [question, setQuestion] = useState(data);

  console.log();

  return question.map((props) => {
    const { id, title, info } = props;
    return (
      <>
        <h3 key={id}>{title}</h3>
        <p key={id}>{info}</p>
      </>
    );
  });
}

export default App;
//note
