$(document).ready(function() {
    const $statusMessage = $('#status-message');
    const $topicList = $('#subscription-topics');

    function showSuccessMessage(message) {
        $statusMessage.text(message).fadeIn(300).delay(2000).fadeOut(300);
    }

    $('#subscribe-btn').on('click', function() {
        $('#notification-status').text('Notifications: Enabled').css('color', 'green');
        showSuccessMessage("You are now subscribed to general notifications.");
    });

    $('#unsubscribe-btn').on('click', function() {
        $('#notification-status').text('Notifications: Disabled').css('color', 'red');
        showSuccessMessage("You have successfully unsubscribed from general notifications.");
    });

    $('#add-topic-btn').on('click', function() {
        const newTopic = $('#new-topic-input').val().trim();
        if (newTopic === "") {
            alert("Please enter a topic name.");
            return;
        }
        const topicId = newTopic.toLowerCase().replace(/\s/g, '-');

        // Create the new list item HTML
        const newTopicHtml = `
            <li class="topic-item">
                <span>${newTopic}</span>
                <button class="topic-button subscribe-topic" data-topic="${topicId}">Follow</button>
                <span class="remove-topic" data-topic="${topicId}">x</span>
            </li>
        `;
        $topicList.append(newTopicHtml);
        $('#new-topic-input').val(''); // Clear the input

        showSuccessMessage(`Topic "${newTopic}" added successfully.`);
    });

    $topicList.on('click', '.subscribe-topic', function() {
        const topic = $(this).data('topic');
        const action = $(this).text() === 'Follow' ? 'Following' : 'Follow';
        $(this).text(action);
        showSuccessMessage(`${action === 'Following' ? 'Subscribed to' : 'Unsubscribed from'} the ${topic} topic.`);
    });

    function topicRemoveHandler() {
        const topic = $(this).data('topic');
        showSuccessMessage(`Removed the topic '${topic}' from the list.`);
        // Remove the list item element
        $(this).closest('.topic-item').remove();
    }

    $topicList.on('click', '.remove-topic', topicRemoveHandler);

    
});