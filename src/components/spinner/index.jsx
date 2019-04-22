import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	0% {
  	transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;
const rotateReverse = keyframes`
	0% {
  	transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
const Spinner = styled.div`
  // position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 36px;
  height: 36px;
  border-left: 6px solid ${props => props.borderColor};
  border-right: 6px solid ${props => props.borderColor};
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  animation: ${rotate} 1.8s linear infinite;
`;
const SpinnerBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 48px;
  height: 48px;
  border-top: 6px solid ${props => props.borderColor};
  border-bottom: 6px solid ${props => props.borderColor};
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  animation: ${rotateReverse} 2s linear infinite;
`;

function SpinnerComponent({ borderColor }) {
  return (
    <SpinnerBg borderColor={borderColor}>
      <Spinner borderColor={borderColor} />
    </SpinnerBg>
  );
}

export default SpinnerComponent;
