<template>
  <h1>vue3全家桶学习</h1>
  <router-link to="/todo">todo（组合api初试）</router-link>
  <router-link to="/toRefs">torefs使用</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App"
};
</script>
