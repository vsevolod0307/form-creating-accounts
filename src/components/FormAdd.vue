<template>
    <div class="form-add">
        <h2>Учётные записи</h2>
        <button class="form-add__btn btn btn-outline-secondary" @click="store.addForm">+</button>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const store = useMainStore();
</script>

<style scoped>
    .form-add {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .form-add__btn {
        font-size: 32px;
        line-height: 1;
    }
</style>