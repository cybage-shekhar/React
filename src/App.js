import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigation } from './Routes/Navigation';
import Header from './Component/Header';
import Footer from './Component/Footer';
import {
  useLocation
} from "react-router-dom";
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

function App() {
  const location =useLocation();
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KQWNTKM' });
    ReactGA.initialize('UA-222489006-1');
    });
  return (
    <>
      <CssBaseline>
        {location.pathname !== "/" ? <Header />: null}
        <Navigation />
        {location.pathname !== "/" ? <Footer />: null}
      </CssBaseline>
    </>
  );
}

export default App;
