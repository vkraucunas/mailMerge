// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('#emails').on('click', '.kill', function() {
    $(this).parent().parent().hide();
    var counter = $("#counter").text();
    $("#counter").text(changeCount(counter));

    if (counter == 0) {
        $("#previewHeader").hide();
    }
});

//helper function
function changeCount(string) {
    var number = Number(string);
    number = number - 1;
    return number.toString();
}