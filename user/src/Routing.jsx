import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';
import App from './App';

const Routing = () => {
    return (

        <>
          <Routes>
             <Route exact path='/' element={<App/>}></Route>
             <Route exact path='/home' element={<App/>}></Route>
             <Route exact path='/adduser' element={<Adduser/>}></Route>
             <Route exact path='/edituser/:_id' element={<Edituser/>}></Route>
          </Routes>
            
        </>
    );
}; 

export default Routing;