import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import CommonStyle from '../styles/CommonStyle'
import GloablStyle from '../styles/GlobalStyle';

const {Wrap} = CommonStyle;

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <Navigation/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/sub'/>
          </Routes>
        <Footer/>
      </Wrap>
    </ThemeProvider>
  )
}

export default Homepage