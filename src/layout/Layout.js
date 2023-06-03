import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main>
      <Acomplishments />
     <Footer/>
    </Container>
  )
}
