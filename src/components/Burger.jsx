import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.1rem;
  position: relative;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.1em;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
        width: ${({ open }) => open ? '80%' : '100%'};

    }
    &:nth-child(2) {
        width: ${({ open }) => open ? '20%' : '100%'};
    }
    &:nth-child(3) {
        width: ${({ open }) => open ? '40%' : '100%'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}
export default Burger