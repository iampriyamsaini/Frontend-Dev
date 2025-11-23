$(document).ready(function() {

    $('.faq-question').on('click', function() {
        $(this).next('.faq-answer').slideToggle(300);
        $(this).toggleClass('active');
    });
    $('.faq-question').hover(
        function() {
            $(this).addClass('hovered-question');
        },
        function() {
            $(this).removeClass('hovered-question');
        }
    );

    $('.faq-question').on('dblclick', function() {
        $('.faq-answer').slideUp(300);
        $('.faq-question').removeClass('active');
    });

    $('.answer-input').on('focus', function() {
        $(this).closest('.faq-item').find('.faq-question').addClass('focused-parent');
    });

    $('.answer-input').on('blur', function() {
        $(this).closest('.faq-item').find('.faq-question').removeClass('focused-parent');
    });
});