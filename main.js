function changeState(id) {
    document.getElementById(id).style.animation = 'sumir 1s';
    setTimeout(() => {
        document.getElementById(id).style.display = 'none';
        document.getElementById('scroller').style.display = 'flex';
        document.getElementById('myHeader').style.display = 'flex';
    }, 1000);
}

function changeBack(id) {
    document.getElementById(id).style.animation = 'sumir 1s';
    setTimeout(() => {
        document.getElementById(id).style.display = 'none';
        document.getElementById('main').style.display = 'flex';
        document.getElementById('myHeader').style.display = 'none';
    }, 1000);
}

main.addEventListener('wheel', () => {
    changeState('main')
})

window.addEventListener('scroll', (scroll) => {
    if (scroll > 0) {
        console.log('cima')
    }
})