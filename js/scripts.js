$(document).ready(function() {
  $(".clickable").click(function(event) {
    $(#"output").slideToggle();
  });

  $(document).ready(function() {
    $("#langSelect").submit(function(event) {
        event.preventDefault();
        const q1 = $("input:form-control[name=question1]:checked").val();
        const q2 = $("input:form-control[name=question2]:checked").val();
        const q3 = $("input:form-control[name=question3]:checked").val();
        const q4 = $("input:form-control[name=question4]:checked").val();
        const q5 = $("input:form-control[name=question5]:checked").val();
        //To exapnd upon this just add more logic below so all answers are accounted for.

        if (q1 === "Python" && q2 === "Scripting") {
          $("#Python").show();
      }
          else if (q1 === "JavaScript" && q3 === ":)") {
            $("#R").show(); 
      }
            else if (q5 === "enjoy") {
              $("#JavaScript").show();
      }
              else if (q4 === "edm") {
                $("Python").show()
      }
                else if (q3 === ":(") {
                  $("R").show()
      }

    });
});