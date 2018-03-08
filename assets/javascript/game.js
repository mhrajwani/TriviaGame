$("#button").on("click", function() {
    $("#button").html("Submit");
    
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswered = 3;

    var count=10;
    var counter=setInterval(timer, 1000);
    
    function timer()
    {
    console.log("hi");
      count=count-1;
      if (count <= 0)
      {
        clearInterval(counter);

        $("#time").html("All Done!!! " +"</br>");
        $("#time").append("Correct Answer: " +  correctAnswer + "</br>");
        $("#time").append("Incorrect Answer: " +  incorrectAnswer + "</br>");
        $("#time").append("Unanswered: " +  unanswered + "</br>");
        $('#game').html("HOPE YOU ENJOYED!");

        if (correctAnswer === 3 || correctAnswer === 2){
        $("#game").html('<img src="assets/images/winner.gif">');
        $("#question").html("");
        
        } else if(correctAnswer===1){
            $("#game").html('<img src="assets/images/ok.gif">');
            $("#question").html("");
        }else{
            $("#game").html('<img src="assets/images/loser.gif">');
            $("#question").html("");
        }

        return;

      }
      $("#time").html("Time Left: " + count + " secs");
     
    }
    $('#game').html("Game On!!")
    $("#question").append("1. What is the Capital city of USA?"+"</br>");
    $("#question").append("2. What is the Currency of USA?"+"</br>");
    $("#question").append("3. What is the 1+1?"+"</br>")
  });

