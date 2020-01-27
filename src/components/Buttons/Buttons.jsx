import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const StyledButton = styled.button`
    box-sizing: border-box;
    color: Grey;
    text-transform: uppercase;
    background-color: transparent;
    padding: 0.5em 2em;
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
const AnimatedButton = (props) => {
  const [hovered, setHovered] = React.useState(false)
  const {opacity} = useSpring({
    config: {mass:3, tension:100, friction:5},
    from: {
      opacity: 0,
    },
    to: {
      opacity: props.disabled ? 0.5: 1,
     
    },
  })

  const {transform} = useSpring({
    config: {mass:3, tension:200, friction:5},
    from:{
      transform: `scale(1)`
    },
    to: {
      transform: `scale(${hovered ? 1.1 : 1})`
    },
  })

  const style = props.disabled ? {opacity} : {opacity, transform}
    

  return (
    <AButton
      onMouseEnter={()=>setHovered(true)}
      onMouseOut={()=>{setHovered(false)}}
      style={style}
      {...props} 
    >
    </AButton>
  )
}


const ButtonPrimary = styled(StyledButton)`
    &:enabled {
    &:hover{
        //background-color: Yellow;
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
