import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data);

  const testArr = [{ id: 1, name: 2, title: 3, year: 4 }];

  const { id, name, title, year } = question;

  console.log();

  return question.map((props) => {
    const { id, title, info } = props;
    return <div key={id}>{title}</div>;
  });
}

export default App;
//note
