// Makes the "Toggle primary sidebar" button actually collapse the sidebar
// on desktop widths, where the default theme button does nothing.
document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll(".sidebar-toggle.primary-toggle");

  toggleButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("vinland-sidebar-collapsed");
    });
  });
});
