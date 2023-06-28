// @mui icons
import Icon from '@mui/material/Icon';

import Dashboard from './layouts/dashboard';
import Tables from './layouts/tables';
// import Billing from './layouts/billing';
// import RTL from './layouts/rtl';
// import Notifications from './layouts/notifications';
// import Profile from './layouts/profile';
// import SignIn from './layouts/authentication/sign-in';
// import SignUp from './layouts/authentication/sign-up';


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
];

export default routes;
