$(document).ready(function () {
  $(".sidebar-dropdown-li").on("click", function () {
    const menu = $(this).find(".menu")?.first();
    const icon = $(this).find(".uil")?.first();
    if (menu?.length) {
      menu.toggleClass("open");
      icon.toggleClass("uil-angle-right uil-angle-down");
    }
  });
});
