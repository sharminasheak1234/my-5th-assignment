const hearts = document.querySelectorAll('.heart');

const heartCounter = document.getElementById('right-heart');

let heartCount = parseInt(heartCounter.textContent,10)

  function updateHeartCount() {
        heartCount++;
        heartCounter.textContent = heartCount;
      }

      hearts.forEach((heart) => {
        heart.addEventListener('click', () => {
          updateHeartCount();
          heart.classList.toggle('fa-solid');
          heart.classList.toggle('fa-regular');
        });
      });