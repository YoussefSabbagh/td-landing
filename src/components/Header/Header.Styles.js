import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const HeaderContainer = styled.header`
    width: 100%;
    height: var(--header-height);
    position: sticky;
    top: 0;
    z-index: 100;

    background-color: var(--lightGreenClr);
    color: var(--orangeClr  );
    
    padding: 0 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 960px) {
        padding: 0 2rem;
        transition: all .8s ease;
    }
`;

export const HeaderLogo = styled(LinkR)`
    width:70px;
    cursor: pointer;
    
    img{
        display: block;
        max-width: 100%;
    }
`;

export const ToggleMenu = styled.div`
    color: var(--orangeClr);
    font-size: 1.5rem;
    cursor: pointer;

    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }    
`;

export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width:100%;
        height: calc(100vh - var(--header-height));
        position: absolute;
        top: var(--header-height);
        left: ${({showToggleMenu}) => (showToggleMenu ? 0 : '-100%')};
        opacity: 1;
        transition: all .5s ease;
        background-color: var(--lightGreenClr);
    }
`;

export const NavLinks = styled.li`
    padding: 0 .5rem;
    text-align:center;

    &:not(:first-of-type) {
        margin-left: 2rem;
        margin-top: 0;
        
        @media screen and (max-width: 768px) {
            margin-left: 0;
            margin-top: 2rem;
        }
    }    

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`;

export const NavLink = styled(LinkS)`
    position: relative;
    color: var(--orangreClr);
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: var(--darkClr);
        width:100%;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--darkClr);
            bottom: -5px;
            left: 0;
        }
    }
`;