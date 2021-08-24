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
});
