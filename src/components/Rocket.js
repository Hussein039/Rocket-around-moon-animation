import React from "react";
import { animated } from "react-spring/renderprops";
import styled from "styled-components";

export default ({ className, children, ...delegatedProps }) => (
  <Wrapper className={className} {...delegatedProps}>
    <animated.svg viewBox="0 0 725 725">
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>
      <g transform="matrix(0.707339,-0.706874,0.706874,0.707339,0.0562527,393.317)">
        <path d="M509.785,15.434C509.012,8.461 503.508,2.953 496.531,2.18C377.828,-11.004 276.641,36.48 194.102,121.445C170.48,145.762 149.992,171.5 132.504,196.34C102.906,195.137 70.09,208.527 46.824,231.793L4.395,274.223C-0.406,279.023 -1.383,286.453 2.012,292.332C5.406,298.211 12.324,301.074 18.887,299.32C28.73,296.676 44.727,293.602 60.094,292.887C65.711,292.625 70.379,292.707 74.258,293.004C64.895,311.012 57.719,326.098 55.34,329.875C51.613,335.805 52.477,343.52 57.43,348.473L81.98,373.023C46.25,421.754 45.66,446.711 45.785,450.246C46.047,457.734 51.887,464.75 61.559,464.75C69.934,464.75 93.953,461.195 137.68,428.723L163.504,454.547C168.492,459.535 176.285,460.371 182.223,456.559C186.262,453.961 200.461,447.086 217.488,438.188C217.77,450.879 216.047,469.516 212.309,494.777C210.184,509.105 227.602,517.73 237.754,507.582L280.184,465.152C302.063,443.273 314.75,410.777 313.813,380.293C339.98,362.008 367.203,340.438 392.621,315.512C476.777,232.984 522.801,132.563 509.785,15.434ZM481.09,30.871C483.484,63.215 480.93,94.566 473.488,124.906C455.008,119.086 436.941,107.652 420.625,91.34C404.25,74.961 392.793,56.82 386.996,38.273C417.324,30.941 448.695,28.457 481.09,30.871ZM58.137,262.91L68.035,253.008C80.008,241.039 95.578,232.418 111.062,228.543C102.973,241.383 95.762,253.645 89.402,264.961C79.578,262.793 68.656,262.391 58.137,262.91ZM86.523,335.141C89.77,328.734 93.695,320.703 100.902,307.086L120.648,326.836C113.301,334.719 106.668,342.207 100.691,349.305L86.523,335.141ZM159.879,329.402C170.809,318.477 181.289,316.48 194.309,316.199C194.023,328.887 191.988,339.723 181.094,350.617C134.523,397.188 102.602,417.984 83.512,427.266C92.93,407.809 113.781,375.5 159.879,329.402ZM176.75,425.367L161.281,409.895C168.344,403.895 175.809,397.242 183.684,389.867L204.703,410.887C190.883,418.266 185.117,421.043 176.75,425.367ZM258.965,443.938L246.957,455.949C247.93,441.398 247.594,430.797 246.219,422.617C257.25,416.406 269.23,409.363 281.785,401.484C278.207,417.344 270.164,432.742 258.965,443.938ZM232.012,395.77L205.117,368.871C225.02,346.973 224.277,325.871 224.277,301.219C224.277,292.934 217.562,286.219 209.277,286.219C186.246,286.219 164.082,284.984 141.625,305.383L115.941,279.699C186.074,156.719 267.141,78.859 358.223,46.797C365.434,70.129 379.469,92.609 399.414,112.555C419.266,132.41 441.641,146.41 464.871,153.648C432.621,244.23 354.781,325.246 232.012,395.77Z" />
      </g>
      <g
        className="window"
        transform="matrix(0.707339,-0.706874,0.706874,0.707339,0.0562527,393.317)"
      >
        <path
          d="M378.199,133.766C348.953,104.523 301.367,104.523 272.125,133.766C242.883,163.012 242.883,210.598 272.125,239.84C301.367,269.082 348.953,269.086 378.199,239.84C407.441,210.598 407.441,163.012 378.199,133.766Z"
          style={{ fillRule: "nonzero" }}
        />
      </g>
    </animated.svg>
    {children}
  </Wrapper>
);

const Wrapper = animated(styled.div`
  text-align: center;

  svg {
    margin-bottom: -15px;
  }
`);
