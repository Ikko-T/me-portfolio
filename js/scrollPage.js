$(function () {
  $('#nav-link a[href*="#"]').click(function () {
    const elmHash = $(this).attr('href');
    const position = $(elmHash).offset().top;
    $('body, html').animate({ scrollTop: position }, 500);
    return false;
  });
});
