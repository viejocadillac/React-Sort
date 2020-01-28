/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const StyledButton = styled.button`
    box-sizing: border-box;
    color: Grey;
    text-transform: uppercase;
    background-color: transparent;
    padding: 0.5em 1.5em;
    margin: 1em 1em;
    border: 2px solid Grey;
    font-weight: bold;
    opacity:0.5;
    border-radius: 3px;

    &:enabled {
      cursor: pointer;
      opacity: 1;
    }
`;


const AButton = animated(StyledButton);
const AnimatedButton = (props, { disabled }) => {
  const [hovered, setHovered] = React.useState(false);
  const { opacity } = useSpring({
    config: { mass: 2, tension: 90, friction: 20 },
    from: {
      opacity: 0,
    },
    to: {
      opacity: disabled ? 0.5 : 1,
    },
  });

  const { transform } = useSpring({
    config: { mass: 3, tension: 200, friction: 15 },
    from: {
      transform: 'scale(1)',
    },
    to: {
      transform: `scale(${hovered ? 1.1 : 1})`,
    },
  });

  const style = disabled ? { opacity } : { opacity, transform };


  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <AButton
      onMouseEnter={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={style}
      {...props}
    />
  );
};


const ButtonPrimary = styled(StyledButton)`
transition: transform 0.5s ease; 
    &:enabled {
    &:hover{
        transform: scale(1.2);
    }
    }
    border-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
`;

const AnimatedButtonPrimary = styled(AnimatedButton)`
    border-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
`;


export {
  ButtonPrimary,
  AnimatedButton,
  AnimatedButtonPrimary,
  StyledButton,
};
