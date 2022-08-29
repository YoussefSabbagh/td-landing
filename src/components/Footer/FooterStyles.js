import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    padding: 1rem;
    background-color: var(--mainClr);
    color: var(--darkClr);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const SocialLogo = styled(Link)`
  color: var(--ctaClr);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
`;

export const SocialIconLink = styled.a`
  color: var(--lightGray);
  font-size: 30px;

  &:hover {
    color: var(--ctaClr);
    transform: scale(1.2);
    transition: all .5s ease;
  }
`;