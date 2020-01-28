import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { ButtonPrimary } from '../Buttons/Buttons';
import './Controls.scss';

const theme = {
  primaryColor: 'White',
};

const WrapperControls = styled.div`
  margin: 0 auto;
  text-align: center;
  display:flex;
  justify-content: center;
  margin-bottom: 3em;
`;

const Controls = ({
  randomize,
  sort,
  stopSorting,
  isSorting,
}) => (

  <ThemeProvider theme={theme}>
    <WrapperControls>
      <ButtonPrimary disabled={isSorting} onClick={randomize}>
        Mezclar
      </ButtonPrimary>
      <ButtonPrimary disabled={isSorting} onClick={sort}>
        Ordenar
      </ButtonPrimary>
      <ButtonPrimary disabled={!isSorting} onClick={stopSorting}>
        Parar
      </ButtonPrimary>
    </WrapperControls>
  </ThemeProvider>
);

Controls.propTypes = {
  randomize: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  stopSorting: PropTypes.func.isRequired,
  isSorting: PropTypes.bool.isRequired,
};

export default Controls;
