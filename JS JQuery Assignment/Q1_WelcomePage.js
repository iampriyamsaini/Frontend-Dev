$(document).ready(function() {
    const $greetingText = $('#greeting-text');

    // --- 1. On page load: Display a personalized greeting based on time of day ---
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning, Visitor!";
        } else if (hour < 18) {
            return "Good Afternoon, Visitor!";
        } else {
            return "Good Evening, Visitor!";
        }
    }
    // Set the initial greeting
    $greetingText.text(getGreeting());

    const quotes = [
        "The best way to predict the future is to create it.",
        "Strive not to be a success, but rather to be of value.",
        "Your time is limited, don't waste it living someone else's life.",
        "The only way to do great work is to love what you do.",
        "Success is not final; failure is not fatal: It is the courage to continue that counts."
    ];
    let quoteIndex = 0;

    $('#change-greeting-btn').on('click', function() {
        $greetingText.text(quotes[quoteIndex]);
        quoteIndex = (quoteIndex + 1) % quotes.length;
    });

    $('#toggle-message-btn').on('click', function() {
        $('#welcome-message-container').toggle();
        const isVisible = $('#welcome-message-container').is(':visible');
        $(this).text(isVisible ? "Hide Welcome Message" : "Show Welcome Message");
    });

    // 4. Show an alert when greeting is clicked
    $greetingText.on('click', function() {
        alert("You clicked the greeting!");
    });
});