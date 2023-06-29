import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidenav from './mdb/components/Sidenav';
import theme from './mdb/assets/theme';
import brandWhite from './mdb/assets/images/logo-ct.png';
import { useMaterialUIController } from './mdb/context';
import routes from './routes';


function App() {
  const [ controller ] = useMaterialUIController();
  const { sidenavColor } = controller;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidenav
        color={sidenavColor}
        brand={brandWhite}
        brandName="Assignments"
        routes={routes}
      />
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.route} element={route.component} />
        })}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
