import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigation } from './Routes/Navigation';
import Header from './Component/Header';
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
      </CssBaseline>
    </>
  );
}

export default App;