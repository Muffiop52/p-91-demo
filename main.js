function addUser()
{
    player1_name = document.getElementById("player1_username").value;
    player2_name = document.getElementById("player2_username").value;
    
    localStorage.setItem("Player1",player1_name);
    localStorage.setItem("Player2",player2_name);

    window.location = "game_index.html";
}