import Dashboard from "@material-ui/icons/Dashboard";
import ListAlt from '@material-ui/icons/ListAlt';
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    rtlName: "Products",
    icon: ListAlt,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "User Profile",
    icon: Person,
    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Table List",
    rtlName: "Table List",
    icon: "content_paste",
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "Typography",
    icon: LibraryBooks,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "Icons",
    icon: BubbleChart,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "Maps",
    icon: LocationOn,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "Notifications",
    icon: Notifications,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "RTL Support",
    icon: Language,
    layout: "/rtl",
  }
];

export default dashboardRoutes;
