let mainPic = document.querySelector('#mainPic');
let pics = document.querySelectorAll('.pics img');

pics.forEach(pic => {
  pic.addEventListener('click', function (e) {
    let targetPic=e.target.getAttribute('src')
    mainPic.setAttribute('src',targetPic)
  })
});

