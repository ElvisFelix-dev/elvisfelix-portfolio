import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo ao <br />
          Meu Portfólio Profissional.
        </SectionTitle>
        <SectionText>
          Hoje, continuo minha jornada, trabalhando incansavelmente para criar experiências de usuário excepcionais.<br />
          A minha historia na programação se transformou em uma luta de superação e perseverança.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
