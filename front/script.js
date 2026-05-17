const api = 'http://o14f4eop03n34t6rjrcwqpq7.178.105.39.91.sslip.io'

async function fetchCon() {
  const req = await fetch(`${api}/get/messages`)
  const res = await req.json()
  return res
}

async function postCon(data) {
  const req = await fetch(`${api}/post/messages`, {
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
  while (messagesSection.firstChild) {
    messagesSection.removeChild(messagesSection.firstChild)
  }
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
  sendButton.addEventListener('click', async () => {
    const data = {
      user: user.value,
      message: text.value,
    }
    await postCon(data)
    const dataMessaging = await fetchCon()
    displayCon(dataMessaging)
  })
}

async function main() {
  const dataMessages = await fetchCon()
  displayCon(dataMessages)
  sendMessage(dataMessages)
}

main()
