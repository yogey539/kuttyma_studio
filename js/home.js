import { addEvent, getAllProduct} from "./utils.js";

getAllProduct("#products",4);

addEvent(
    "click",
    ".btn-menu",
    function () {
      const sidebar = select("#side-bar");
      if (sidebar) sidebar.classList.toggle("is-open");
      toggleMenuIcons();
    },
    true
);
function toggleMenuIcons() {
    const menuIcons = select(".menu-icon", true);
    const sidebar = select("#side-bar");
    if (menuIcons && sidebar) {
      if (sidebar.classList.contains("is-open")) {
        menuIcons.forEach(function (menu) {
          menu.classList.add("is-open");
        });
      } else {
        menuIcons.forEach(function (menu) {
          menu.classList.remove("is-open");
        });
      }
    }
  }



