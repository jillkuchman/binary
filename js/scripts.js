function binary(input) {
    var input_array = input.toString().split("");
    var reversed_array = input_array.reverse();
    var counter = 0;
    reversed_array.forEach(function(digit) {
        var added = parseInt(digit)*Math.pow(2, reversed_array.indexOf(digit));
        counter += added;
    });
    return counter;
}
