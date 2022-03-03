
import modal from "./modules/modal.js";
import popup from "./modules/popup.js";
import sidebarMenu from "./modules/sidebarMenu.js";
import changeSetting from "./modules/changeSetting.js";
import accordion from "./modules/accordion.js";
import calendar from "./modules/calendar.js";
import modalSteps from "./modules/modalSteps.js";
import rangeSlider from "./modules/rangeSlider.js";

import selectSettings from "./settings/selects.js";

document.addEventListener('DOMContentLoaded', () => {
   sidebarMenu();
   modal();
   popup();
   changeSetting();
   accordion();
   calendar('[data-calendar="main"]');
   calendar('[data-calendar="small"]');
   calendar('.modal-new-project__calendar');
   calendar('.modal-customer-schedule__calendar');
   calendar('.customer-done__calendar');
   calendar('.respondent-calendar__calendar');
   
   modalSteps('.modal-new-project');
   modalSteps('.modal-customer-schedule');

   rangeSlider();
   
   selectSettings();
})