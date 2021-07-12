$(function(){
  $('.single-item').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1800,
    fade: true,
  });
});

//サンプル
$(function () {
    $('.button').prevAll().hide();
    $('.button').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown();
            $(this).text('閉じる').removeClass('close');
        } else {
            $(this).prevAll().slideUp();
            $(this).text('もっと見る').removeClass('close');
        }
    });
});
