const dataMessages = []
function displayCon() {
  const messagesSection = document.querySelector('.main_chat')

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

function sendMessage() {
  const sendButton = document.querySelector('.main_chat_send_button')
  const text = document.querySelector('.main_chat_textarea')
  const user = document.querySelector('.main_user_name')
  sendButton.addEventListener('click', () => {
    const data = {
      user: user.value,
      message: text.value,
    }
    dataMessages.push(data)
    displayCon()
    event.preventDefault()
  })
}

function main() {
  sendMessage()
}

main()
