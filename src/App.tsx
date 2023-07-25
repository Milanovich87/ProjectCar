/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Services } from './components/Services/Services';
import { RB } from './components/RB/RB';
import { EC } from './components/EC/EC';
import { USA } from './components/USA/USA';


export const App = () => {

  return (

    <div className='App' >
      <Header />
      <div className="content">
        <Routes>
          <Route path='/'>
            <Route index element={<Main />} />
            <Route path='services' element={<Services />} />
            <Route path='rb' element={<RB />} />
            <Route path='ec' element={<EC />} />
            <Route path='usa' element={<USA />} />


            {/* <Route index element={<SwipeToSlide />} />
            <Route path='portfolio' element={<Gallery />} />
            <Route path='services' element={<Services />} />
            <Route path='styling' element={<PageStyling />} />
            <Route path='wardrobe' element={<Wardrobe />} />
            <Route path='escort' element={<Escort />} />
            <Route path='form' element={<Form />} />
            <Route path='privacy' element={<PrivacyPolicy />} /> */}
          </Route>
        </Routes>
      </div>
    </div >
  );
}


