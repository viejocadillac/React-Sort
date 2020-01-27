import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatedButton, AnimatedButtonPrimary } from '../Buttons/Buttons';
import './Controls.scss';

const theme = {
  primaryColor: 'Yellow',
};

const WrapperControls = styled.div`
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
      <AnimatedButtonPrimary disabled={isSorting} onClick={randomize}>Mezclar</AnimatedButtonPrimary>
      <AnimatedButtonPrimary disabled={isSorting} onClick={sort}>Ordenar</AnimatedButtonPrimary>
      <AnimatedButtonPrimary disabled={!isSorting} onClick={stopSorting}>Parar</AnimatedButtonPrimary>
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
