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
          Objetivo da Eyes Green, é ajudar a sua empresa à crescer no mundo online, desenvolvendo landing pages e sistemas personalizados
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;