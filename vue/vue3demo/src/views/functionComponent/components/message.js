import { createApp } from 'vue'
import Message from './message.vue'


function createMessage(text) {
    const messageInstance = createApp(Message, {
        text
    })
    const mountNode = document.createElement('div')
    document.body.appendChild(mountNode)
    messageInstance.mount(mountNode)
    let timer = setTimeout(() => {
        document.body.removeChild(mountNode)
        clearTimeout(timer)
    }, 2000)
}

export default createMessage