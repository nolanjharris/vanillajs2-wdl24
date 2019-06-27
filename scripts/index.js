const form = document.querySelector('#chat-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.querySelector('#chat-input');
    const chatContent = document.querySelector("#chat-content");
    // chatContent.innerHTML('<p><strong>You: </strong></p>' + input.value);
    const newChat = document.createElement('p');
    newChat.innerText = input.value;
    chatContent.append(newChat);

    input.value = '';
})