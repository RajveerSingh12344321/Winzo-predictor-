
function predictWinner() {
  const teamA = parseFloat(document.getElementById("teamAScore").value);
  const teamB = parseFloat(document.getElementById("teamBScore").value);
  const result = document.getElementById("result");

  if (isNaN(teamA) || isNaN(teamB)) {
    result.textContent = "Please enter both scores.";
    return;
  }

  if (teamA > teamB) {
    result.textContent = "Team A is predicted to win!";
  } else if (teamB > teamA) {
    result.textContent = "Team B is predicted to win!";
  } else {
    result.textContent = "It's a draw!";
  }
}
