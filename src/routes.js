/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Store from "@material-ui/icons/Store";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Shoplist from "views/Shoplist/Shoplist.js";
import Myshop from "views/Myshop/Myshop.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout

const authenticate = (id) => {
  const http = new XMLHttpRequest();
  let auth = false;
  http.onreadystatechange = function() {
    this.readyState == 4 && this.status == 200 && (auth = !auth);
  }

  http.open('GET', `/login/${id}`, false);
  http.send();

  return auth;
}


const dashboardRoutes = [

  {
    path: "shoplist",
    name: "Shoplist",
    icon: Store,
    component: Shoplist,
    layout: "/"
  },
  {
    path: "myshop",
    name: "Myshop",
    icon: Store,
    component: Myshop,
    layout: "/",
    isAuthed: localStorage.auth ? authenticate(localStorage.auth):false
  },
  {
    path: "user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/"
  },
  {
    path: "table",
    name: "Owner List",
    icon: "content_paste",
    component: TableList,
    layout: "/"
  },
  {
    path: "maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/"
  },
  {
    path: "notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/"
  },

];

export default dashboardRoutes;

export function Authenticate(id) {
  return authenticate(id);
}



/**
 *   {
    path: "dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/"
  },
  {
    path: "typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/"
  },
 * {
    path: "icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/"
  },
 */