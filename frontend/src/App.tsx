import React, { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Sidenav from './mdb/components/Sidenav';
import routes from './routes';
// import Configurator from "./mdb/examples/Configurator";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from './mdb/assets/theme';
import { useMaterialUIController, setMiniSidenav } from './mdb/context';

// Images
import brandWhite from './mdb/assets/images/logo-ct.png';
import brandDark from './mdb/assets/images/logo-ct-dark.png';


function App() {
  const [ controller, dispatch ] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidenav
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
        brandName="Assignments"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      {/*{layout === "vr" && <Configurator />}*/}
      {/*<Routes>*/}
      {/*  {getRoutes(routes)}*/}
      {/*  <Route path="*" element={<Navigate to="/dashboard" />} />*/}
      {/*</Routes>*/}

    </ThemeProvider>
  );
}

export default App;
