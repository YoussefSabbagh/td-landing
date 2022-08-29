import styled from 'styled-components';

export const ServicesSection = styled.section`
   position: relative;
   width: 100%;
   max-width: 1200px;
   padding-top:3rem;
   margin: 4rem auto;
`;

export const ServicesContent = styled.div`
   width: 100%;
   padding: 1rem;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   justify-items: left;
   text-align:justify;
`;

export const ServicesTitle = styled.h2`
    position: relative;
    color: var(--darkGreenClr);
    font-size: 3rem;
    text-transform: uppercase;
    text-align:left;
    margin-bottom: 0;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 30%;
        border-bottom: 3px solid var(--orangeClr);
    }
    
    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const ServicesSubtitle = styled.h3`
   position: relative;
   color: var(--darkGreenClr);
   font-size: 1.5rem;
   text-transform: uppercase;
   margin-top: 1rem;
   margin-bottom: 1rem;
`;

export const ServicesGridProcess = styled.div`
   margin-top: 4rem;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   column-gap: .5rem;
   row-gap: 3rem;
   text-align:justify;
   
   h4 {
      color: var(--orangeClr);
      font-size: 1.2rem;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: .2rem;
   }
`;
 
export const ServicesGridServices = styled.div`
   position: relative;
   margin-top: 5rem;
 
   img{
      width: 100px;
      height: 100px;
   }
 
   position: relative;
   width: 100%;
   min-height: 100vh;
   align-items: center;
`;

export const ServicesContainer = styled.div`
   position: relative;
   margin-top: 3rem;
   width: 100%;
`;

export const ServicesCards = styled.article`
   position: relative;
   text-align: center;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

   &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(95,108,17,.3);
      z-index: -200;
      pointer-events: none;
   }
`;

export const CardBox = styled.div `
    width: 100%;
    min-height: 400px;
    transition:all 0.6s ease;
    transform-style: preserve-3d;
    cursor: pointer;
    margin: 0;

    &:hover{
        transform: rotateY(180deg);
    }

   .back{
      transform: rotateY(180deg);
      background: linear-gradient(to left, rgba(95,108,17,.2)0%, rgba(95,108,17,.5)50%);
      font-size:.75rem;
   }
   
   .front{
      background: linear-gradient(to right, rgba(95,108,17,.2)0%, rgba(95,108,17,.5)50%);
      background-size:cover;
      color: var(--darkGreenClr);
      
      img {
         width: 100px;
         height: 100px;
         margin-bottom: 1rem
      }
   }

   .front, .back{
      padding: 2rem;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius:10px;
      backface-visibility:hidden;
      display: flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;
      box-shadow: 0px 2px 5px gray;
   }
`