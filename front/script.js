const api = 'http://localhost'
const port = 3000

async function fetchCon() {
  const req = await fetch(`${api}:${port}/get/messages`)
  const res = await req.json()
  return res
}

async function postCon(data) {
  const req = await fetch(`${api}:${port}/post/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

function displayCon(dataMessages) {
  const messagesSection = document.querySelector('.main_chat')
  messagesSection.innerHTML = ''
  dataMessages.forEach((element) => {
    const message_container = document.createElement('div')
    const message_text = document.createElement('p')
    const message_user = document.createElement('h3')

    message_text.innerText = `Message - ${element.message}`
    message_user.innerText = `User - ${element.user}`
    message_container.append(message_text, message_user)
    messagesSection.append(message_container)
  })
}

function sendMessage(dataMessages) {
  const sendButton = document.querySelector('.main_chat_send_button')
  const text = document.querySelector('.main_chat_textarea')
  const user = document.querySelector('.main_user_name')
  sendButton.addEventListener('click', () => {
    const data = {
      user: user.value,
      message: text.value,
    }
    postCon(data)
    main()
  })
}

async function main() {
  const dataMessages = await fetchCon()
  displayCon(dataMessages)
  sendMessage(dataMessages)
}

main()
