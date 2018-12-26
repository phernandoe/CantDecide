$(document).ready(function(){

    $("#userinput" ).keyup(function() {
        var values = $(this).val().split(" ");
        console.log(values);

        if (values.length > 6){
            $("h6").text("It's wise not to add more than 6 choices");
        } else if (values.length == 1 && values[0] != ""){
            $("h6").text("Really?");
        } else {
            $("h6").text("");
        }

    }).keyup();

});