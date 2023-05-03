import { Route, Routes } from 'react-router-dom';
import Homepage from './page/Homepage';
import Editor from './page/Editor';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Homepage/>}/>
      <Route path='/editor' element={<Editor/>}/>
    </Routes>
  );
}

export default App;
