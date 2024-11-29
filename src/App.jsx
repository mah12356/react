
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Index from './views/Index'
import Main from './layout/Main'
import Login from './views/Login';
import Signup from './views/Signup';
import Masters from './views/Masters';
import Showmaster from './views/ShowMaster';
import './BYekan/font.css'
import React from 'react';
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<Index/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route exact path='/masters' element={<Masters/>}/>
          <Route exact path='/showmaster/:id' element={<Showmaster/>}/>
          <Route exact path='*' element={<p>utf</p>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
