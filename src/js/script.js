
import modal from "./modules/modal.js";
import popup from "./modules/popup.js";
import sidebarMenu from "./modules/sidebarMenu.js";
import changeSetting from "./modules/changeSetting.js";
import accordion from "./modules/accordion.js";
import calendar from "./modules/calendar.js";

import selectSettings from "./settings/selects.js";

document.addEventListener('DOMContentLoaded', () => {
   sidebarMenu();
   modal();
   popup();
   changeSetting();
   accordion();
   calendar('[data-calendar="main"]');
   calendar('[data-calendar="small"]');
   
   selectSettings();
})