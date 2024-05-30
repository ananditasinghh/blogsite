function closePage() {
    var currentWindow = window.open('', '_self', '');
    currentWindow.close();
}


        function scrollToBlogs() {
            document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' });
        }

        function goBack() {
            window.history.back();
        }

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }