
    const heartIcons = document.querySelectorAll('.heart');
    const heartCounter = document.getElementById('heart-count');

    heartIcons.forEach((heart) =>{
        heart.addEventListener('click', () => {
      let currentCount = parseInt(heartCounter.textContent) ;
      heartCounter.textContent = currentCount + 1;
    });
  });

    