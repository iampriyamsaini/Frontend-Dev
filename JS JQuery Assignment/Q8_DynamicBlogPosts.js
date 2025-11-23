$(document).ready(function() {
    const $container = $('#blog-posts-container');
    let postCount = 3;

    function createPostHTML(title, body, keywords) {
        postCount++;
        return `
            <article class="blog-post" data-keywords="${keywords}">
                <h2 class="post-title">${title}</h2>
                <div class="post-body">${body}</div>
                <div class="post-tags">Keywords: ${keywords}</div>
            </article>
        `;
    }

    $('#add-new-post-btn').on('click', function() {
        const newPost = createPostHTML(
            `New Post ${postCount}: Travel Destinations`,
            'A look at the top travel spots for the next year.',
            'Travel,Leisure'
        );
        $container.append(newPost);
    });

    $('#prepend-featured-btn').on('click', function() {
        const featuredPost = createPostHTML(
            `*FEATURED* Post ${postCount}: Breaking News`,
            'This is an urgent and featured article at the top of the list.',
            'News,Urgent'
        );
        $container.prepend(featuredPost);
    });

    $('#remove-last-btn').on('click', function() {
        $container.find('.blog-post').last().remove();
    });

    $('#add-tags-btn').on('click', function() {
        $('.blog-post').each(function(index) {
            const $post = $(this);
            if ($post.prev('.post-divider').length === 0) {
                $post.before(`<hr class="post-divider">`);
            }
            if ($post.find('.post-timestamp').length === 0) {
                $post.find('.post-body').after(`<p class="post-timestamp">Published: ${new Date().toLocaleDateString()}</p>`);
            }
        });
    });

    $('#highlight-keyword-btn').on('click', function() {
        const keyword = 'Tech';
        $('.blog-post').removeClass('keyword-highlight');
        $(`article.blog-post[data-keywords*="${keyword}"]`).addClass('keyword-highlight');
    });
});