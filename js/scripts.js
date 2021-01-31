$(document).ready(function() {
  $(".clickable").click(function(event) {
    $(#"output").slideToggle();
  });

  $(document).ready(function() {
    $("#formLang").submit(function(event) {
        event.preventDefault();
        const q1 = $("input:form-control[name=question1]:checked").val();
        const q2 = $("input:form-control[name=question2]:checked").val();
        const q3 = $("input:form-control[name=question3]:checked").val();
        const q4 = $("input:form-control[name=question4]:checked").val();
        const q5 = $("input:form-control[name=question5]:checked").val();
        //To exapnd upon this just add more logic below so all answers are accounted for.

        if (q1 === "Python" && q2 === "Scripting") {
          $("#Python").alert();
      }
          else if (q1 === "JavaScript" && q3 === ":)") {
            $("#R").alert(); 
      }
            else if (q5 === "enjoy") {
              $("#JavaScript").alert();
      }
              else if (q4 === "edm") {
                $("Python").alert()
      }
                else if (q3 === ":(") {
                  $("R").alert()
      }

    });
});