$(document).ready(function() {
    const $searchInput = $('#search-input');
    const $courseListItems = $('#course-list .course-item');
    const $matchCount = $('#match-count');

    function removeHighlight($element) {
        const originalText = $element.data('original-text') || $element.text();
        $element.html(originalText);
    }

    function applyHighlight($element, searchTerm) {
        if (!$element.data('original-text')) {
            $element.data('original-text', $element.text());
        }

        const originalText = $element.data('original-text');
        if (!searchTerm) {
            $element.html(originalText);
            return;
        }

        const regex = new RegExp('(' + searchTerm.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + ')', 'gi');

        const newHtml = originalText.replace(regex, '<span class="highlight">$1</span>');
        $element.html(newHtml);
    }

    $searchInput.on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase().trim();
        let matchedCount = 0;

        $courseListItems.each(function() {
            const $courseItem = $(this);
            const courseText = $courseItem.text().toLowerCase();

            if (courseText.includes(searchTerm)) {
                $courseItem.show();
                matchedCount++;

                applyHighlight($courseItem, searchTerm);
            } else {

                $courseItem.hide();
                removeHighlight($courseItem);
            }
        });

        $matchCount.text(matchedCount);
    });

    $('#clear-search-btn').on('click', function() {
        $searchInput.val('');
        $searchInput.trigger('keyup'); 

        $courseListItems.show().each(function() {
            removeHighlight($(this));
        });
        $matchCount.text($courseListItems.length);
    });

    $courseListItems.each(function() {
        removeHighlight($(this));
    });
    $matchCount.text($courseListItems.length);
});