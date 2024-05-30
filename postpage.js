let isLiked = false;
let likeCount = 0;
let comments = [];

function toggleLike() {
    isLiked = !isLiked;
    likeCount = isLiked ? likeCount + 1 : likeCount - 1;

    document.getElementById('likeButton').style.color = isLiked ? 'red' : 'black';
    document.getElementById('likeCount').innerText = likeCount + (likeCount === 1 ? ' Like' : ' Likes');

    // Store the like state in localStorage
    localStorage.setItem('isLiked', isLiked);
    // Store the like count in localStorage
    localStorage.setItem('likeCount', likeCount);
}

function showCommentDialog() {
    document.getElementById('commentDialog').classList.toggle('hidden');
}

function postComment() {
    const commentInput = document.getElementById('commentInput');
    const comment = commentInput.value.trim();

    if (comment !== "") {
        // Store the comment in the comments array
        comments.push(comment);
        
        // Display the comments
        displayComments();

        // Store the comments array in localStorage
        localStorage.setItem('comments', JSON.stringify(comments));

        // Clear the comment input
        commentInput.value = "";

        // Close the comment dialog
        showCommentDialog();
    }
}

function displayComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = "";

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = `Comment: ${comment}`;
        commentsContainer.appendChild(commentElement);
    });
}

function showTranslationOptions() {
   
}


window.onload = function () {
    isLiked = localStorage.getItem('isLiked') === 'true';
    likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    comments = JSON.parse(localStorage.getItem('comments')) || [];

    document.getElementById('likeButton').style.color = isLiked ? 'red' : 'black';
    document.getElementById('likeCount').innerText = likeCount + (likeCount === 1 ? ' Like' : ' Likes');

    displayComments();
};

function goBack() {
    window.history.back();
}

