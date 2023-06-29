import Icon from '@mui/material/Icon';
import DashboardLayout from './layouts/Dashboard';
// TODO add more layouts here for this Demo


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <DashboardLayout />,
  },
];

export default routes;
