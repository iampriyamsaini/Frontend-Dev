$(document).ready(function() {

    $('.employee.manager').on('click', function() {
        $('.direct-report').removeClass('highlighted-report');

        $(this).nextAll('.direct-report').addClass('highlighted-report');
    });

    $('.employee').hover(
        function() {
            const email = $(this).data('email');
            const role = $(this).data('role');

            $(this).append(`<div class="contact-info">Role: ${role}<br>Email: ${email}</div>`);
            $(this).find('.contact-info').show();
        },
        function() {
            $(this).find('.contact-info').remove();
        }
    );

    $('.department-header').on('click', function() {
        $('.department-card').removeClass('department-highlight');
        $('.employee').css('background-color', ''); // Reset employee BG

        const $departmentCard = $(this).closest('.department-card');
        $departmentCard.toggleClass('department-highlight');

        
        $departmentCard.find('.team-list').children('.employee').css('background-color', '#ffccbc');

        if (!$departmentCard.hasClass('department-highlight')) {
            $departmentCard.find('.team-list').children('.employee').css('background-color', '');
        }
    });

    $('#highlight-random-siblings').on('click', function() {
        $('.employee').removeClass('sibling-highlight');

        const $allEmployees = $('.employee');
        if ($allEmployees.length === 0) return;

        const randomIndex = Math.floor(Math.random() * $allEmployees.length);
        const $randomEmployee = $allEmployees.eq(randomIndex);

        $randomEmployee.siblings('.employee').addClass('sibling-highlight');
        $randomEmployee.css('border', '2px solid red');
        setTimeout(() => $randomEmployee.css('border', 'none'), 2000); // Remove border after 2s
    });

    $('#toggle-all-teams').on('click', function() {
        const $teamLists = $('.team-list');

        if ($teamLists.first().is(':visible')) {
            $teamLists.slideUp(400);
            $(this).text("Expand All Teams");
        } else {
            $teamLists.slideDown(400);
            $(this).text("Collapse All Teams");
        }

      
    });
});