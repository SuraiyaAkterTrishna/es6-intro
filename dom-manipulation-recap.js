document.getElementById('apply-bg').addEventListener('click', function(){
    const players = document.getElementsByClassName('player');
    for (const player of players) {
        player.style.backgroundColor = 'lightblue';
    }
});
document.getElementById('apply-center').addEventListener('click', function(){
    const third = document.getElementById('third');
    third.style.textAlign = 'center';
});
document.getElementById('add-new').addEventListener('click', function(){
    const playerContainer = document.getElementById('players');
    const newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.innerHTML = `
        <h3>New Player</h3>
        <p>New another player created by js dom</p>
    `;
    playerContainer.appendChild(newPlayer);
});