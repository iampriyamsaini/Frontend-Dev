$(document).ready(function() {
    const $form = $('#registration-form');
    const $successMessage = $('#form-success');
    const uniqueEmails = ['test@example.com', 'admin@corp.net']; 

    function validateField(isValid, $field, $errorDiv) {
        if (isValid) {
            $field.removeClass('invalid-field'); //  Highlight invalid fields
            $errorDiv.slideUp(100);
        } else {
            $field.addClass('invalid-field'); 
            $errorDiv.slideDown(100);
        }
        return isValid;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $form.on('submit', function(e) {
        e.preventDefault(); 
        let formIsValid = true;

        $successMessage.slideUp(200);

        const $name = $('#name');
        const nameValid = validateField(
            $name.val().trim() !== '',
            $name,
            $('#name-error')
        );
        if (!nameValid) formIsValid = false;

        const $email = $('#email');
        const emailValue = $email.val().trim();
        let emailValid = emailRegex.test(emailValue);

        if (!emailValid) {
            $('#email-error').text('Please enter a valid email address.');
        } else if (uniqueEmails.includes(emailValue)) {
            emailValid = false;
            $('#email-error').text('This email is already registered.');
        }

        emailValid = validateField(emailValid, $email, $('#email-error'));
        if (!emailValid) formIsValid = false;

        const $password = $('#password');
        const passwordValid = validateField(
            $password.val().length >= 8,
            $password,
            $('#password-error')
        );
        if (!passwordValid) formIsValid = false;


        if (formIsValid) {
            $successMessage.slideDown(400);
            $form[0].reset(); // Clear the form
        } else {
            const $firstInvalid = $('.invalid-field').first();
            if ($firstInvalid.length) {
                $('html, body').animate({
                    scrollTop: $firstInvalid.offset().top - 50
                }, 500);
            }
        }
    });

    $('#name, #email, #password').on('blur', function() {
        if ($(this).attr('id') === 'name') {
            validateField($(this).val().trim() !== '', $(this), $('#name-error'));
        } else if ($(this).attr('id') === 'email') {
            const emailValue = $(this).val().trim();
            let isValid = emailRegex.test(emailValue);
            if (isValid && uniqueEmails.includes(emailValue)) {
                 isValid = false; 
            }
            validateField(isValid, $(this), $('#email-error'));
        } else if ($(this).attr('id') === 'password') {
            validateField($(this).val().length >= 8, $(this), $('#password-error'));
        }
    });
});