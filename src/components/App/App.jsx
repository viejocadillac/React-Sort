import React from 'react';
import './App.scss';

import ShowAlgorithm from '../ShowAlgorithm/ShowAlgorithm';
import BubbleSort from '../BubbleSort/BubbleSort';


const algoritmos = [
  {
    value: 'bubblesort',
    name: 'Bubble Sort',
    component: <BubbleSort milis={20} maxValue={400} />,
  },
  {
    value: 'bubblesort2',
    name: 'Bubble Sort 2',
    component: <BubbleSort milis={20} maxValue={400} />,
  },
];

function App() {
  const defaultAlgoritmo = algoritmos[0];
  return (
    <div className="App">
      <ShowAlgorithm algoritmos={algoritmos} defAlgoritmo={defaultAlgoritmo} items={50} />
    </div>
  );
}

export default App;
