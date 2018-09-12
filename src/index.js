function setDate(){
  const now = new Date();

  const secsHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hoursHand = document.querySelector('.hour-hand');

  const secs = now.getSeconds();
  const secsDegrees = ((secs/60) * 360) + 90;
  secsHand.style.transform = `rotate(${secsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins/60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours/60) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  function removeTransition(){
    if(secsDegrees === 90){
      secsHand.style.transition = 'none';
    }
  }
  removeTransition();
}

setInterval(setDate, 1000);
