
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import Dashboard from "views/page/Dashboard.js";
import OnlineMeeting from "views/page/OnlineMeeting.js";
import CloudHosting from "views/page/CloudHosting.js";
import VideoHosting from "views/page/VideoHosting.js";
import WebsiteHosting from "views/page/WebsiteHosting.js";
import MusicHosting from "views/page/MusicHosting.js";
import ImageHosting from "views/page/ImageHosting.js";
import Verification from "views/page/Verification.js"
import Register from "views/page/Register.js";
import Login from "views/page/Login.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Online Meeting",
    icon: "ni ni-planet text-blue",
    component: OnlineMeeting,
    layout: "/admin"
  },
  {
    path: "/cloud-hosting",
    name: "Cloud Hosting",
    icon: "ni ni-pin-3 text-orange",
    component: CloudHosting,
    layout: "/admin"
  },
  {
    path: "/video-hosting",
    name: "Video Hosting",
    icon: "ni ni-single-02 text-yellow",
    component: VideoHosting,
    layout: "/admin"
  },
  {
    path: "/website-hosting",
    name: "Website Hosting",
    icon: "ni ni-bullet-list-67 text-red",
    component: WebsiteHosting,
    layout: "/admin"
  },
  {
    path: "/music-hosting",
    name: "Music Hosting",
    icon: "ni ni-key-25 text-info",
    component: MusicHosting,
    layout: "/admin"
  },
  {
    path: "/image-hosting",
    name: "Image Hosting",
    icon: "ni ni-circle-08 text-pink",
    component: ImageHosting,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-circle-08 text-pink",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
