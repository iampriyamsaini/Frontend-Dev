$(document).ready(function() {
    $('#hide-a').on('click', function() {
        $('#banner-a').hide();
    });

    $('#show-hidden').on('click', function() {
        $('.banner:hidden').show();
    });

    $('#slide-toggle-b').on('click', function() {
        $('#banner-b').slideToggle(400); // 400ms duration for effect
        const isVisible = $('#banner-b').is(':visible');
        $(this).text(isVisible ? "Slide Up Banner B" : "Slide Down Banner B");
    });

    $('#fade-toggle-c').on('click', function() {
        $('#banner-c').fadeToggle(600); // 600ms duration for effect
    });

    const $rotatingBanners = $('.rotating-banner');
    let currentIndex = 0;

    $rotatingBanners.eq(currentIndex).fadeIn(1000);

    // Set an interval for the rotation
    setInterval(function() {
        const $currentBanner = $rotatingBanners.eq(currentIndex);
        currentIndex = (currentIndex + 1) % $rotatingBanners.length;
        const $nextBanner = $rotatingBanners.eq(currentIndex);

        $currentBanner.fadeOut(1000, function() {
            $nextBanner.fadeIn(1000);
        });

    }, 5000); // 5000 milliseconds = 5 seconds
});