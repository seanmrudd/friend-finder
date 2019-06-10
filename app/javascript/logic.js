$("#submit").on("click", function (event) {
    event.preventDefault();
    // console.log($("#new-friend-name").val().trim());
    if ($("#new-friend-name").val().trim() !== "" && $("#new-friend-pic").val().trim() !== "") {
        var nameInput = $("#new-friend-name").val().trim();
        var picInput = $("#new-friend-pic").val().trim();
        // console.log(nameInput, picInput)
    } else errorModal();

    var answerArray = [];

    var q1Input = parseInt($('#question1').val());
    // console.log(q1Input);
    var q2Input = parseInt($('#question2').val());
    var q3Input = parseInt($('#question3').val());
    var q4Input = parseInt($('#question4').val());
    var q5Input = parseInt($('#question5').val());
    var q6Input = parseInt($('#question6').val());
    var q7Input = parseInt($('#question7').val());
    var q8Input = parseInt($('#question8').val());
    var q9Input = parseInt($('#question9').val());
    var q10Input = parseInt($('#question10').val());

    answerArray.push(q1Input, q2Input, q3Input, q4Input, q5Input, q6Input, q7Input, q8Input, q9Input, q10Input);
    // console.log(answerArray);

    // To Do push nameInput, picInput and answerArray to api/friends

    var newFriendData = [nameInput, picInput, answerArray];
    // console.log(newFriendData);
    if (answerArray.includes(NaN)) {
        errorModal();
    } else {
        $.post("/api/friends", newFriendData, function () {
            friendModal();
        });
    }
});

function errorModal() {
    $('#error-modal').modal('toggle');
};

function friendModal() {
    $('#friend-modal').modal('toggle');
}