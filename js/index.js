
function mainfunc() {

  var bx1 = document.getElementById("bx1").innerHTML;
  var bx2 = document.getElementById("bx2").innerHTML;
  var bx3 = document.getElementById("bx3").innerHTML;
  var bx4 = document.getElementById("bx4").innerHTML;
  var bx5 = document.getElementById("bx5").innerHTML;
  var bx6 = document.getElementById("bx6").innerHTML;
  var bx7 = document.getElementById("bx7").innerHTML;
  var bx8 = document.getElementById("bx8").innerHTML;
  var bx9 = document.getElementById("bx9").innerHTML;

  // Checking if Player X won or not

  if ((bx1 == 'X') && (bx2 == 'X') && (bx3 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }
  else if ((bx1 == 'X') && (bx4 == 'X') && (bx7 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }
  else if ((bx1 == 'X') && (bx5 == 'X') && (bx9 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }
  else if ((bx7 == 'X') && (bx8 == 'X') && (bx9 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }
  else if ((bx3 == 'X') && (bx6 == 'X') && (bx9 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }
  else if ((bx3 == 'X') && (bx5 == 'X') && (bx7 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }
  else if ((bx2 == 'X') && (bx5 == 'X') && (bx8 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }
  else if ((bx4 == 'X') && (bx5 == 'X') && (bx6 == 'X')) {
    window.alert('Player X won');
    location.reload();
  }

  // Checking if Player 0 won or not

  else if ((bx1 == '0') && (bx2 == '0') && (bx3 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }
  else if ((bx1 == '0') && (bx4 == '0') && (bx7 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }
  else if ((bx7 == '0') && (bx8 == '0') && (bx9 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }
  else if ((bx3 == '0') && (bx6 == '0') && (bx9 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }
  else if ((bx1 == '0') && (bx5 == '0') && (bx9 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }
  else if ((bx3 == '0') && (bx5 == '0') && (bx7 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }
  else if ((bx2 == '0') && (bx5 == '0') && (bx8 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }
  else if ((bx4 == '0') && (bx5 == '0') && (bx6 == '0')) {
    window.alert('Player 0 won');
    location.reload();
  }

  // match tie checking

  else if ((bx1 == 'X' || bx1 == '0') && (bx2 == 'X' | bx2 == '0') && (bx3 == 'X' || bx3 == '0') &&
    (bx4 == 'X' || bx4 == '0') && (bx5 == 'X' || bx5 == '0') && (bx6 == 'X' || bx6 == '0') &&
    (bx7 == 'X' || bx7 == '0') && (bx8 == 'X' || bx8 == '0') && (bx9 == 'X' || bx9 == '0')) {
    document.getElementById('turn').innerHTML = "Match Tie";
    window.alert('Match Tie');
    location.reload();
  }
  
  
}

// Setting turn of the player and putting values

flag = 1;
function func1() {
  if (flag == 1) {
    document.getElementById("bx1").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx1").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func2() {
  if (flag == 1) {
    document.getElementById("bx2").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx2").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func3() {
  if (flag == 1) {
    document.getElementById("bx3").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx3").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func4() {
  if (flag == 1) {
    document.getElementById("bx4").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx4").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func5() {
  if (flag == 1) {
    document.getElementById("bx5").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx5").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func6() {
  if (flag == 1) {
    document.getElementById("bx6").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx6").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func7() {
  if (flag == 1) {
    document.getElementById("bx7").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx7").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func8() {
  if (flag == 1) {
    document.getElementById("bx8").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx8").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}
function func9() {
  if (flag == 1) {
    document.getElementById("bx9").innerHTML = "X";
    document.getElementById('turn').innerHTML = "Player 0 turn";
    flag = 0;
  }
  else {
    document.getElementById("bx9").innerHTML = "0";
    document.getElementById('turn').innerHTML = "Player X turn";
    flag = 1;
  }
}

//   game reset

function funcbtn() {
  document.getElementById('bx1').innerHTML = '';
  document.getElementById("bx2").innerHTML = '';
  document.getElementById("bx3").innerHTML = '';
  document.getElementById("bx4").innerHTML = '';
  document.getElementById("bx5").innerHTML = '';
  document.getElementById("bx6").innerHTML = '';
  document.getElementById("bx7").innerHTML = '';
  document.getElementById("bx8").innerHTML = '';
  document.getElementById("bx9").innerHTML = '';
}