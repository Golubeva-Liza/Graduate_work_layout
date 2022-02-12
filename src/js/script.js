
import modal from "./modules/modal.js";
import popup from "./modules/popup.js";
import sidebarMenu from "./modules/sidebarMenu.js";
import selectSettings from "./settings/selects.js";

document.addEventListener('DOMContentLoaded', () => {
   sidebarMenu();
   modal();
   popup();
   selectSettings();
})