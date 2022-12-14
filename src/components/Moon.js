import styled, { keyframes } from "styled-components";

import Circle from "./Circle";
import moon from "./moon.png";

const MoonBackgroundAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export default styled(Circle)`
  width: 200px;
  height: 200px;
  background-image: url(${moon});
  background-size: cover;

  animation: ${MoonBackgroundAnimation} 120s linear infinite;
  box-shadow: 0 0 40px 0px #fff;
`;
