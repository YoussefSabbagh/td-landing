import { useState } from 'react';
import logo from '../../assets/image/logos/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import {
  HeaderContainer,
  HeaderLogo,
  ToggleMenu,
  NavItems,
  NavLinks,
  NavLink,
} from './Header.Styles';

const Header = () => {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src={logo} alt="Logo" />
      </HeaderLogo>

      <NavItems onClick={handleShowToggleMenu} showToggleMenu={showMobileMenu}>
        <NavLinks>
          <NavLink to="home" onClick={handleShowToggleMenu}>
            Inicio
          </NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink to="about" onClick={handleShowToggleMenu}>
            Nosotros
          </NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink to="service" onClick={handleShowToggleMenu}>
            Servicios
          </NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink to="project" onClick={handleShowToggleMenu}>
            Proyectos
          </NavLink>
        </NavLinks>
        <NavLinks>
          <NavLink to="contact" onClick={handleShowToggleMenu}>
            Contacto
          </NavLink>
        </NavLinks>
      </NavItems>

      <ToggleMenu onClick={handleShowToggleMenu}>
        {showMobileMenu ? <FaTimes /> : <FaBars />}
      </ToggleMenu>
    </HeaderContainer>
  );
};

export default Header;
