import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigation } from './Routes/Navigation';
import Header from './Component/Header';
import Footer from './Component/Footer';
import {
  useLocation
} from "react-router-dom";

function App() {
  const location =useLocation();
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
