function binary(input) {
    var input_array = input.split("");
    var reversed_array = input_array.reverse();
    var counter = 0;
    var index = 0;
    reversed_array.forEach(function(digit) {
        var added = (parseInt(digit))*(Math.pow(2, index));
        counter += added;
        index ++;
    });
    return counter;
};

$(document).ready(function() {
    $("form#binary").submit(function(event){

        var input = $("input#user_input").val();
        var result = binary(input);

        var user_input_array = input.split("");
        var binary_check = true;
        user_input_array.forEach(function(check_digit) {
            if (check_digit != 1 && check_digit != 0) {
                binary_check = false;
            }
        });

        if (binary_check) {
            $("#result_binary_true").show();
            $(".input_binary").text(input);
            $(".result_decimal").text(result);
            $("#not_binary").hide();
        }
        else {
            $("#not_binary").show();
            $(".not_binary").text("Please enter a binary number");
            $("#result_binary_true").hide();
        }


        event.preventDefault();
    });
});
