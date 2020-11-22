import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  overflow-y: auto;
  z-index: 10;
  li {
    padding: 5px 10px;
    margin: 3px 0.7em !important;
    border: 1px solid rgba(92, 92, 92, 0.123) !important;
    &:hover {
      background-color: #f28232;
      color: white;
    }
    a {
      text-decoration: none !important;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 75px;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  const kategoriler = require("../data/kategoriler.json");

  return (
    <Ul open={open}>
      {kategoriler.map((category) => (
        <li  key={category.id}>
          <a href="#">
            {category.KategoriAdi}
          </a>
        </li>
      ))}
    </Ul>
  );
};

export default RightNav;
