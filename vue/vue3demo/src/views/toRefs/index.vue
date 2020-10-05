<template>
    <div>
        <h2>toRefs（将普通值变成响应式的）</h2>
        <ul>
            <li>name: {{ name }}</li>
            <li>age: {{ age }}</li>
        </ul>
        <button @click="name = 'wuyanzu'">改变名字</button>
        <button @click="age = 20">改变年龄</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        const liuhao = reactive({
            name: 'liuhao',
            age: 18
        })
        const person = toRefs(liuhao)
        return {
            ...person
        }
    }
}
</script>

<style>

</style>