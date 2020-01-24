import React from 'react';
import './App.scss';

import ShowAlgorithm from '../ShowAlgorithm/ShowAlgorithm';
import BubbleSort from '../BubbleSort/BubbleSort';


const algoritmos = [
  {
    value: 'bubblesort',
    name: 'Bubble Sort',
    component: <BubbleSort milis={20} maxValue={500} />,
  },
];

function App() {
  const defaultAlgoritmo = algoritmos[0].value;
  return (
    <div className="App">
      <ShowAlgorithm algoritmos={algoritmos} defAlgoritmo={defaultAlgoritmo} items={50} />
    </div>
  );
}

export default App;
