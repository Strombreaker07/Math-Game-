player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player1 + " : ";
document.getElementById("player_2_name").innerHTML = player2 + " : ";
document.getElementById("score_player1").innerHTML = player_1_score;
document.getElementById("score_player2").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "question turn - " + player1;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'> ";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button> ";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

answer_turn = "player2";
question_turn = "player1";

function check() 
{
    get_answer = document.getElementById("input_check_box").value;
    answer =  get_answer.toLowerCase();
    console.log("the answer given by player is - " + answer);

    if(answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player_1_score = player_1_score + 1;
            document.getElementById("score_player1").innerHTML = player_1_score;
        }
        else
        {
            player_2_score = player_2_score + 1;
            document.getElementById("score_player2").innerHTML = player_2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn - " + player2;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn - " + player1;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player2;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player1;
    }

    document.getElementById("output").innerHTML = "";
}