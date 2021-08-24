// document.write('<script src="./display.js"></script>');
// document.write('<script src="./scrollFadein.js"></script>');

$(function () {
  const logo = document.querySelector('.logo');
  const button = document.querySelector('.button');
  const aboutPage = document.querySelector('.about');
  let display = false;

  $('.button').on('click', () => {
    $('.about').slideToggle(500, () => {
      if (!display) {
        $(logo).animate({ top: '25.62rem' }, 300);
        $(button).animate({ top: '24.50rem' }, 300);
        $(aboutPage).css({
          position: 'sticky',
          top: '0',
        });
        $(button).text('CLOSE   X');
        display = true;
      } else {
        $(logo).animate({ top: '7.81rem' }, 300);
        $(button).animate({ top: '1.75rem' }, 300);
        $(aboutPage).css({
          position: '',
          top: '',
        });
        $(button).text('ABOUT   ｖ');
        display = false;
      }
    });
  });

  $(window).scroll(function () {
    $('.fadeIn').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });

  const scrollTop = document.querySelector('#page-top');
  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  $('.open-btn').click(function () {
    $('.open-btn').toggleClass('active');
    $('.nav').toggleClass('active');
  });

  $('#nav-link a[href*="#"]').click(function () {
    const elmHash = $(this).attr('href');
    const position = $(elmHash).offset().top;
    $('body, html').animate({ scrollTop: position }, 500);
    return false;
  });
});
