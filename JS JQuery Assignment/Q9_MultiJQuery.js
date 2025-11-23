$jq1(document).ready(function() {
    const $carousel = $jq1('#carousel-v1');
    const $slides = $carousel.find('.carousel-slide');
    let currentIndex = 0;
    $slides.eq(currentIndex).show();

    function rotateCarousel() {
        $slides.eq(currentIndex).fadeOut(1000, function() {
            currentIndex = (currentIndex + 1) % $slides.length;
            $slides.eq(currentIndex).fadeIn(1000);
            $jq1('#widget-v1').addClass('active-widget');
            $jq1('#widget-v2').removeClass('active-widget');
        });
    }

    setInterval(rotateCarousel, 3000); // Rotate every 3 seconds

  
    $jq1('#widget-v1').addClass('active-widget');
});


$jq2(document).ready(function() {
    $jq2('#show-modal-v2').on('click', function() {
        $jq2('#modal-v2').fadeIn(400);
    });

    $jq2('#close-modal-v2').on('click', function() {
        $jq2('#modal-v2').fadeOut(400);
    });

    $jq2('#modal-v2').on('click', function(e) {
        if (e.target.id === 'modal-v2') {
            $jq2('#modal-v2').fadeOut(400);
        }
    });

    const tooltipTextMap = {
        'hover-item-v2': 'This is the main action item.',
        'hover-item-v2-2': 'This is a secondary action item.'
    };

    $jq2('#widget-v2 span').each(function() {
        const $item = $jq2(this);
        const itemId = $item.attr('id');
        const tooltipMessage = tooltipTextMap[itemId] || 'No specific tooltip text.';

        $item.after(`<div id="tooltip-${itemId}" class="tooltip-v2">${tooltipMessage}</div>`);

        $item.hover(
            function() {
                const $tooltip = $jq2(`#tooltip-${itemId}`);
                const offset = $item.offset();
                $tooltip.css({
                    top: offset.top + $item.outerHeight() + 5,
                    left: offset.left
                }).fadeIn(100);

                $jq2('#widget-v2').addClass('active-widget');
                $jq2('#widget-v1').removeClass('active-widget');
            },
            function() {
                $jq2(`#tooltip-${itemId}`).fadeOut(100);
                $jq2('#widget-v2').removeClass('active-widget');
            }
        );
    });
});