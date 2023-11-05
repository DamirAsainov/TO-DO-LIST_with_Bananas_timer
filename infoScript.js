
const mainMonkey = document.getElementById('main-monkey');

// Функция для создания эффекта тряски
function shakeElement() {
    const shakeInterval = 100; // Интервал тряски в миллисекундах
    const shakeDistance = 10; // Расстояние, на которое элемент будет трястись

    let startTime = null;
    
    function shake(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        
        const elapsedTime = timestamp - startTime;
        
        if (elapsedTime < shakeInterval) {
            const randomX = Math.random() * shakeDistance - shakeDistance / 2;
            const randomY = Math.random() * shakeDistance - shakeDistance / 2;
            mainMonkey.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            requestAnimationFrame(shake);
        } else {
            mainMonkey.style.transform = 'translate(0, 0)';
            startTime = null;
        }
    }
    
    requestAnimationFrame(shake);
}

// Вызов функции тряски при клике на изображение
mainMonkey.addEventListener('click', shakeElement);
document.addEventListener("DOMContentLoaded", function() {
    const mainMonkey = document.getElementById("main-monkey");
    
    // Ожидаем немного, прежде чем начать анимацию
    setTimeout(() => {
        mainMonkey.style.left = "100%"; // Переместите изображение вправо
        mainMonkey.addEventListener("transitionend", function() {
            // Когда анимация завершена, возвращаем изображение в начальное положение
            mainMonkey.style.left = "0";
            setTimeout(() => {
                mainMonkey.style.left = "100%"; // Повторная анимация
            }, 1000);
        });
    }, 1000);
});
