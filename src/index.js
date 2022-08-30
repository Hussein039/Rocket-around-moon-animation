import React from "react";
import ReactDOM from "react-dom";
import { Keyframes } from "react-spring/renderprops";
import Particles from "react-particles-js";

import Rocket from "./components/Rocket";
import Circle from "./components/Circle";
import Moon from "./components/Moon";
import styled, { keyframes } from "styled-components";

import bg from "./star-3886297_1920.jpg";
import "./styles.css";

const Container = Keyframes.Spring(async (next, cancel, ownProps) => {
  while (true) {
    await next({
      from: { angle: 0 },
      to: { angle: 360 }
    });
  }
});

const particleConfig = {
  particles: {
    line_linked: {
      enable: false
    },
    color: {
      value: ["#f00", "#ff0"]
    },
    number: {
      value: 20
    },
    size: {
      value: 5,
      size_min: 1,
      random: true,
      anim: {
        enable: true
      }
    },
    move: {
      radius: 10,
      direction: "bottom",
      out_mode: "out"
    },
    polygon: {
      link_lines: false
    }
  }
};

function App() {
  return (
    <Wrapper>
      <Moon color="white" />
      <Container reset native config={{ duration: 3000, precision: 0.1 }}>
        {props => (
          <RotatingElement color="darkgray" angle={props.angle}>
            <Rocket>
              <Particles width="20px" height="50px" params={particleConfig} />
            </Rocket>
          </RotatingElement>
        )}
      </Container>
      <Footer>
        rocket icon from
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </Footer>
    </Wrapper>
  );
}

const Footer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  text-align: right;
  color: white;
  font-family: sans-serif;
  font-size: 0.8em;
  a:link {
    color: cyan;
  }
`;

const pulsate = keyframes`
  to {
    fill: yellow;
  }
`;

const RotatingElement = styled(Circle).attrs(props => ({
  style: {
    left: "50px",
    transformOrigin: `-150px`,
    //transform: 'rotate(-60deg)'
    //transform: `rotate(-${props.angle}deg)`
    transform: props.angle.interpolate(a => `rotate(-${a}deg)`)
  }
}))`
  position: relative;
  width: 64px;
  height: 64px;
  will-change: transform;
  fill: ${props => props.color};

  .window {
    animation: ${pulsate} 1s linear alternate infinite;
    filter: url(#blur);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: 60%;
`;

// moon picture Image by <a href="https://pixabay.com/users/rkarkowski-289667/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1859616">Robert Karkowski</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1859616">Pixabay</a>

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
