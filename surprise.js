document.querySelector('.reveal-button').addEventListener('click', function() {
    document.querySelector('.hidden-message').style.display = 'block';
    this.style.display = 'none';
});