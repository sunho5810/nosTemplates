import React, { useEffect, useState } from 'react'
import Navigation from '../components/navigation/type-A/Navigation'
import Footer from '../components/footer/type-A/Footer'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import CommonStyle from '../styles/CommonStyle'
import GloablStyle from '../styles/GlobalStyle';

const {Wrap} = CommonStyle;

const Homepage = () => {

  const [isWeb, setIsWeb] = useState(true);

  // useEffect(() => {
  //   console.log("isWeb33?", isWeb)
  // }, [isWeb]);

  useEffect(() => {
    window.innerWidth <= 1080 ? setIsWeb(false) : setIsWeb(true);
    // console.log("isWeb11?", isWeb);
    window.addEventListener("resize", function(){
      this.innerWidth <= 1080 ? setIsWeb(false) : setIsWeb(true);
        // console.log("isWeb22?", isWeb);
    })
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <Navigation isWeb={isWeb}/>
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