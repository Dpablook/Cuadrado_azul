window.addEventListener('DOMContentLoaded', () => {
    const cuadrado = document.getElementById('cuadrado');
    const screenWidth = window.innerWidth - cuadrado.offsetWidth;
    const screenHeight = window.innerHeight - cuadrado.offsetHeight;

    let posX = 0;
    let posY = 0;
    let directionX = 1;
    let directionY = 1;

    function moverCuadrado() {
        posX += 5 * directionX;
        posY += 5 * directionY;

        if (posX > screenWidth || posX < 0) {
            directionX *= -1;
        }

        if (posY > screenHeight || posY < 0) {
            directionY *= -1;
        }

        cuadrado.style.transform = `translate(${posX}px, ${posY}px)`;

        requestAnimationFrame(moverCuadrado);
    }

    moverCuadrado();
});
