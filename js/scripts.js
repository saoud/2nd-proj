$(document).ready(function() {
  $(".clickable").click(function() {
    $(#"output").slideToggle();
  });

  $(document).ready(function() {
    $("#formLang").submit(function(event) {
        event.preventDefault();