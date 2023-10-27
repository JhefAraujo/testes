function changeState(id) {
    document.getElementById(id).style.animation = 'sumir 1s';
    setTimeout(() => {
        document.getElementById(id).style.display = 'none';
        document.getElementById('scroller').style.display = 'flex';
    }, 1000);
}