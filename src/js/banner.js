var menubtn = document.getElementById('menubtn');
var navigation = document.getElementById('navigation_bar');
var menu = document.getElementById('menu');

menubtn.onclick = function() {
  if (navigation.style.right == "-200px") {
    navigation.style.right = "0";
    menu.src = "/src/assets/Без_названия-removebg-preview (1).png";
  } 
  else {
    navigation.style.right = "-200px";
    menu.src = "/src/assets/Без_названия-removebg-preview.png";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var animatedImage = document.querySelector('.logo');
  animatedImage.classList.add('animate');
});


function openNewPage() {
  window.open('https://t.me/beautyme_uz', '_blank');
}
function openNewPage2() {
  window.open('https://www.instagram.com/beautyme_uz?igsh=NmFydThhb3EyeWN2', '_blank');
}
function openNewPage3() {
  window.open('https://www.youtube.com/@beautyme1370', '_blank');
}
function openNewPage4() {
  window.open('https://www.facebook.com/beautyme.uz', '_blank');
}


document.addEventListener('DOMContentLoaded', function () {
  var formWrapper = document.getElementById('wrapper');
  var loadingElement = document.getElementById('loading');
  var contentElement = document.getElementById('content');
  var loginForm = document.getElementById('loginForm');
  var registerForm = document.getElementById('registerForm'); 
  var closeButton = document.querySelector('.icon-close');


  closeButton.addEventListener('click', function () {

    formWrapper.style.display = 'none';

    setTimeout(function () {
      loadingElement.style.display = 'block';

      var delayTime = 9000;

      setTimeout(function () {
        loadingElement.style.display = 'none';

        contentElement.style.display = 'block';
      }, delayTime);
    }, );
  });

  loginForm.addEventListener('submit', function (event) {
 
    event.preventDefault();

    formWrapper.style.display = 'none';

    setTimeout(function () {
      loadingElement.style.display = 'block';
      var delayTime = 9000;

      setTimeout(function () {
        loadingElement.style.display = 'none';
        contentElement.style.display = 'block';
      }, delayTime);
    }, );
  });
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    formWrapper.style.display = 'none';
    setTimeout(function () {
      loadingElement.style.display = 'block';
      var delayTime = 9000;

      setTimeout(function () {
        loadingElement.style.display = 'none';
        contentElement.style.display = 'block';
      }, delayTime);
    }, );
  });
});








const wrapper = document.getElementById('wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
   wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
  wrapper.classList.remove('active');
});


// При возврате пользователя на главную страницу
document.addEventListener('popstate', function(event) {
  if (event.state && event.state.page === 'home') {
    // Показываем только content
    wrapper.style.display = 'none';
    loadingElement.style.display = 'none';
    contentElement.style.display = 'block';
  }
});

