import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FiMenu, FiX } from 'react-icons/fi';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  MobileIcon,
  MobileMenu,
} from './HeaderStyles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Container>
      <Div1>
        <Link href="/" passHref>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
            <DiCssdeck size="3rem" /> <span style={{ marginLeft: '8px' }}>Portfolio</span>
          </a>
        </Link>

        {/* Ícone mobile */}
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FiX size="2rem" /> : <FiMenu size="2rem" />}
        </MobileIcon>
      </Div1>

      {/* Menu principal */}
      <Div2 className={isOpen ? 'open' : ''}>
        <li>
          <Link href="#projects" passHref>
            <NavLink onClick={closeMenu}>Projetos</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" passHref>
            <NavLink onClick={closeMenu}>Tecnologias</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" passHref>
            <NavLink onClick={closeMenu}>Sobre</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#file" passHref>
            <NavLink onClick={closeMenu}>Arquivo</NavLink>
          </Link>
        </li>
      </Div2>

      {/* Ícones sociais */}
      <Div3>
        <SocialIcons href="https://github.com/ElvisFelix-dev" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/elvis-felix" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/2system_dev/" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://elvisfelix-certificate.netlify.app/" target="_blank">
          <AiFillFileText size="3rem" />
        </SocialIcons>
      </Div3>

      {/* Menu mobile (animado) */}
      <MobileMenu isOpen={isOpen}>
        <Link href="#projects" passHref>
          <NavLink onClick={closeMenu}>Projetos</NavLink>
        </Link>
        <Link href="#tech" passHref>
          <NavLink onClick={closeMenu}>Tecnologias</NavLink>
        </Link>
        <Link href="#about" passHref>
          <NavLink onClick={closeMenu}>Sobre</NavLink>
        </Link>
        <Link href="#file" passHref>
          <NavLink onClick={closeMenu}>Arquivo</NavLink>
        </Link>
      </MobileMenu>
    </Container>
  );
};

export default Header;
