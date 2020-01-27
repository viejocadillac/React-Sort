/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Graph from '../Graph/Graph';
import Controls from '../Controls/Controls';

import { sleep, arrayFillRandom, swap } from '../../utils';


const BubbleSort = ({ items, milis, maxValue }) => {
  const isMountedOrSorting = React.useRef(true);

  const [random, setRandom] = React.useState(arrayFillRandom(items, maxValue));
  const [isSorting, setIsSorting] = React.useState(false);


  React.useEffect(() => {
    isMountedOrSorting.current = true;

    return () => {
      // clean
      isMountedOrSorting.current = false;
    };
  }, []);

  const randomize = () => {
    setRandom(arrayFillRandom(items, maxValue));
  };

  const stopSorting = () => {
    isMountedOrSorting.current = false;
  };

  const bubbleSort = async () => {
    isMountedOrSorting.current = true;
    setIsSorting(true);

    let arr = [].concat(random);

    for (let i = 0; i <= arr.length; i++) {
      for (let x = 0; x <= arr.length; x++) {
        if (arr[x] >= arr[x + 1]) {
          // eslint-disable-next-line no-await-in-loop
          await sleep(milis);
          arr = swap(arr, x, x + 1);

          if (isMountedOrSorting.current) {
            setRandom(arr);
          } else {
            setIsSorting(false);
            return;
          }
        }
      }
    }
    isMountedOrSorting.current = false;
    setIsSorting(false);
    console.log('Ordenamiento con Bubble Sort finalizado');
  };

  return (
    <div style={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <Graph array={random} />
      <Controls
        randomize={randomize}
        sort={bubbleSort}
        stopSorting={stopSorting}
        isSorting={isSorting}
      />
    </div>
  );
};

BubbleSort.propTypes = {
  items: PropTypes.number,
  milis: PropTypes.number,
  maxValue: PropTypes.number,
};

BubbleSort.defaultProps = {
  items: 50,
  milis: 100,
  maxValue: 500,
};

export default BubbleSort;
