import { defineStore } from 'pinia';
import { State, Data } from '@/types';
export const useMainStore = defineStore("index", {
    state: (): State => ({
        data: [
            {
                id: 1,
                mark: [{ text: "" }],
                type: "local",
                login: "",
                password: "",
            },
        ]
    }),
    actions: {
        addForm() {
            this.$state.data.push({
                id: this.$state.data.length + 1,
                mark: [{ text: "" }],
                type: "local",
                login: "",
                password: "",
            })
        },
        deleteForm(id: number) {
            this.$state.data = this.$state.data.filter(item => item.id !== id);
        },
        updateForm(id: number, data: Data) {
            const formIndex = this.$state.data.findIndex(i => i.id === id)
            this.$state.data[formIndex] = data;
        }
    },
    persist: true,
})