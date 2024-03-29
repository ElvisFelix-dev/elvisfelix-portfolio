import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Sobre</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#file">
          <NavLink>Arquivo</NavLink>
        </Link>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ElvisFelix-dev" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/elvis-felix" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/2system_dev/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://elvisfelix-certificate.netlify.app/" target="_blank">
          <AiFillFileText size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
