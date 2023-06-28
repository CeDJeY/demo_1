import React from 'react';

import CssBaseline from "@mui/material/CssBaseline";
import Sidenav from "./mdb/components/Sidenav";
// import routes from "../material-dashboard/src/routes";
import Configurator from "../material-dashboard/src/examples/Configurator";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from './mdb/assets/theme';
import { useMaterialUIController } from './mdb/context';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidenav
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
        brandName="Material Dashboard 2"
        routes={[]}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
      {/*{layout === "vr" && <Configurator />}*/}
      {/*<Routes>*/}
      {/*  {getRoutes(routes)}*/}
      {/*  <Route path="*" element={<Navigate to="/dashboard" />} />*/}
      {/*</Routes>*/}
      1234
    </ThemeProvider>
  );
}

export default App;
