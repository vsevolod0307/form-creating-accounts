import { defineStore } from 'pinia';
export const useMainStore = defineStore("index", {
    state: () => ({
        id: 0,
    }),
    persist: true,
})