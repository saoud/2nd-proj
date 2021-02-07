
function chooseResult(sum) {
    if (sum < 5) {
      return "python"
    } else if (sum >= 5 && sum <10) {
      return "Javascript"
    } else {
      return "R"
    }
  }  
  
  $(document).ready(function() {
    $("form#q1").submit(function(event) {
    
      let total=0;
      
      $("input:checkbox[name=language]:checked").each(function() {
        const number = $(this).val()
        total += parseInt(number)
      });
  
      $("input:checkbox[name=accomplish]:checked").each(function() {
        const number = $(this).val()
        total += parseInt(number)
      });
  
      $("input:checkbox[name=life]:checked").each(function() {
        const number = $(this).val()
        total += parseInt(number)
      });
  
      $("input:checkbox[name=music]:checked").each(function() {
        const number = $(this).val()
        total += parseInt(number)
      });

      $("input:checkbox[name=reason]:checked").each(function() {
        const number = $(this).val()
        total += parseInt(number)
      });

    if (chooseResult(total) === "Python") {
      $('#Python').show();
      $('#R').hide();
      $('#Javascript').hide();
    } else if (chooseResult(total) === "Javascript") {
      $('#Javascript').show();
      $('#R').hide();
      $('#Python').hide();
    } else {
      $('#R').show();
      $('#Python').hide();
      $('#Javascript').hide();
    }

    event.preventDefault();
    }); 
  });
  