
const mainMonkey = document.getElementById('main-monkey');

function shakeElement() {
    const shakeInterval = 100;
    const shakeDistance = 10;

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


mainMonkey.addEventListener('click', shakeElement);
document.addEventListener("DOMContentLoaded", function () {
    const mainMonkey = document.getElementById("main-monkey");

    setTimeout(() => {
        mainMonkey.style.left = "100%";
        mainMonkey.addEventListener("transitionend", function () {
            mainMonkey.style.left = "0";
            setTimeout(() => {
                mainMonkey.style.left = "100%";
            }, 1000);
        });
    }, 1000);
});

var barCtx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Without Busy Monkey', 'With Busy Money'],
        datasets: [{
            label: 'Your % of success without busy monkey and with',
            data: [26, 87],
            backgroundColor: [
                'rgba(39, 55, 77, 0.7)',
                'rgba(75, 134, 115, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


