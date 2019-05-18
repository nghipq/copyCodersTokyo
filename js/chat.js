var chatButton = document.getElementById('chat-button');
var chatBox = document.getElementById('chat-box');
var chatClose = document.getElementById('chat-close');

chatButton.addEventListener('click', () => {
    chatBox.classList.replace('d-none', 'd-flex');
    chatButton.classList.replace('d-flex', 'd-none');
}) 

chatClose.addEventListener('click', () => {
    chatBox.classList.replace('d-flex', 'd-none');
    chatButton.classList.replace('d-none', 'd-flex');
}) 