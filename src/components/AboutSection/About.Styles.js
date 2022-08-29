import styled from 'styled-components';

export const AboutContainer = styled.section`
    width: 95%;
    max-width: 1200px; 
    padding-top: 6rem;
    margin: 5em auto;
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media screen and (max-width: 768px) {
      width: 90%;
      grid-template-columns: 1fr;
   }
}
`;

export const AboutContent = styled.div`
  position: relative;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: left;
  text-align: justify;
`;

export const AboutTitle = styled.h2`
  position: relative;
  color: var(--darkGreenClr);
  font-size: 3.5rem;
  text-transform: uppercase;
  text-align: left;
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

export const AboutSubtitle = styled.h3`
  position: relative;
  color: var(--darkGreenClr);
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const AboutImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const TeamContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  background: rgba(95, 108, 15, 0.5);
  margin: 4rem auto;
  padding: 3rem 2rem;
  padding-bottom: 10rem;
`;

export const TeamContent = styled.div`
  width: 100%;
  position: relative;
`;

export const TeamTitle = styled.h2`
  position: relative;
  color: var(--darkGreenClr);
  font-size: 3.5rem;
  text-transform: uppercase;
  text-align: left;
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

export const TeamCards = styled.article`
  position: relative;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;

export const TeamCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background: rgba(15, 108, 15, 0.3);
  cursor: pointer;

  &:hover {
    background: rgba(15, 108, 15, 0.5);
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const TeamSocial = styled.div`
  width: 50%;
  display: flex;
  list-style: none;
  justify-content: space-around;
  .social__link {
    color: var(--darkGreenClr);
    font-size: 1.5rem;
    &:hover {
      color: var(--orangeClr);
    }
  }
`;

export const TeamCardText = styled.div`
  width: 50%;
  margin: 1rem 4rem;
  padding: 0.5rem 1rem;
  background: var(--lightClr);
  color: var(--orangeClr);

  .team__card-name {
    font-weight: bold;
    text-transform: uppercase;
  }
`;
