<template>
    <form-creating/>
</template>

<script setup lang="ts">
import { useMainStore } from "./store";
import FormCreating from "@/components/FormCreating.vue";

const store = useMainStore();


</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px 20px;
}
</style>
