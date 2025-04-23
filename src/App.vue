<template>
<button @click="click">click</button>
<div>{{store.id}}</div>
</template>

<script setup lang="ts">
import { useMainStore } from "./store";

const store = useMainStore();

const click = () => {
  store.id = 9;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
