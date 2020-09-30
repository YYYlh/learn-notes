<template>
    <h2>组合api</h2>
    <input type="text" v-model="message" /><button @click="add">添加</button>
    <ul>
      <li v-for="item in state.todoList" :key="item.id">{{ item.message }}</li>
    </ul>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "todoList",
  setup() {
    return {
      ...todo(),
    };
  },
};

// 组合式api 将数据与逻辑处理封装到一个函数内
function todo() {
  const message = ref("");
  const state = reactive({
    todoList: [
      {
        id: 1,
        message: "你好",
      },
    ],
  });
  function add() {
    state.todoList.push({
      id: state.todoList.length + 1,
      message: message.value,
    });
    message.value = "";
  }
  return { message, state, add };
}
</script>
