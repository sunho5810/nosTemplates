import { Route, Routes } from 'react-router-dom';
import './res/css/common.css'
import './res/css/main.css'
import Homepage from './page/Homepage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

/* 
  editor page

  app부터 만들기

  components
*/

function App() {
  return (
    <div>
      <Navigation/>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
