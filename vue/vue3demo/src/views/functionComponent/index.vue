<template>
    <div>
        <button @click="open">点击打开弹框</button>
    </div>
</template>

<script>
import createMessage from './components/message'
export default {
    name: 'functionComponent',
    setup() {
        const open = () => {
            createMessage('嘿嘿')
        }
        return {
            open
        }
    }
}
</script>

<style>

</style>