window.onload = function () {
  let pointer = document.getElementsByClassName("pointer")[0];
  document.addEventListener('mousemove', changePos);
  function changePos(e) {
    pointer.style.left = e.pageX - 10 + 'px';
    pointer.style.top = e.pageY - 10 + 'px';
  }

  function makeWater () {
    pointer.classList.toggle('active');
  }

  document.addEventListener('click', makeWater);
}

