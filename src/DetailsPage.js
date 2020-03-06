import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

const slideInRight = keyframes`
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: hidden;
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

const DetailsPageElm = styled(Page)`
  background-color: #90caf9;
  &.page-enter {
    animation: ${slideInRight} 0.5s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s forwards;
  }
`;

const DetailsPage = () => {
    return (
        <DetailsPageElm>
            <h2>Page</h2>
            <Link to="/">← Back to Page One</Link>
        </DetailsPageElm>
    );
};

export default DetailsPage;
