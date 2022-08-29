/* https://paletasdecolores.com/paleta-de-colores-2279/ */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --lightClr: #eaeaec;
    --darkClr: #111b1e;
    --lightGreenClr: #f3fbec;
    --darkGreenClr: #5f6c11;
    --orangeClr: #ff6508;
   
    --mainClr: #FADE98;
    --altClr: #1544c0;
    --ctaInvClr: #5210ac;
    --ctaClr: #f86449;

    --yellowClr: #fbe10f;
    --blueClr: #1544c0;
    --purpleClr: #5210ac;
   

    /* other variables  */
    --header-height: 80px;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    margin: 0 auto;
    background-color: var(--lightGreenClr);
    color: var(--darkclr);
    font-family: 'Encode Sans Condensed', sans-serif;
    font-size: 15px;
    line-height: 1.5;
    
    &::-webkit-scrollbar {
        width: 1rem;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: orange;        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: blue;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 3px solid orange;  /* creates padding around scroll thumb */
    }  
  }

  .title {
    position: relative;
      margin-bottom: 2rem;

    font-family: 'Encode Sans Condensed', sans-serif;
    font-size: 1.5rem;
    
    color: var(--orangeClr);
    text-align: center;

    &:after {
      content: '';
      height:3px;
      width: 10rem;
      background-color: var(--orangeClr);

      position: absolute;
      bottom: -1rem;
      left: 0;
    }
  }

  .error {
    padding: .75rem;
    margin: .75rem 0;
    background-color: rgba(255, 0, 0, 0.658);
    color: var(----lightClr);
    font-size: bolder;
  }

  p {
    line-height: 1.5em;
    padding-right: 1rem;
    padding-top: 1rem;
    font-size: 1.2rem;
  }
`;
