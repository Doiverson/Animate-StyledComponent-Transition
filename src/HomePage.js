import React from 'react';
import styled, { keyframes } from "styled-components";
import {Link} from "react-router-dom";

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
`;

const HomePageElm = styled(Page)`
    background-color: #f92f43;
    &.page-enter {
        animation: ${slideInLeft} 0.5s forwards;
    }
    
    &.page-exit {
    animation: ${slideOutLeft} 0.5s forwards;
  }
`;

const HomePage = () => {
  return (
      <HomePageElm>
          <h2>Home Page</h2>
          <Link to="/details">Go to Page Two</Link>
      </HomePageElm>
  );
};

export default HomePage;
