$('.btn-menu').on('click', function() {
    $('.modal_wrap').addClass('active');
    $('html').css('overflow-y', 'hidden');
    $('.menuinfo_wrap').animate({
        right: '0'
    }, 400)
});

$('.btn-close').on('click', function() {
    $('.modal_wrap').removeClass('active');
    $('html').css('overflow-y', 'auto');
    $('.menuinfo_wrap').css('right', '-300px');
})