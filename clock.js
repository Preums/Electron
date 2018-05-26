const clock = () => {
  let date = new Date;
  let hour = date.getHours()+'h'+date.getMinutes()+'mn'+date.getSeconds()+'sec';
  document.getElementById('time').textContent=hour;
}

const intervalID = window.setInterval(clock,1000);