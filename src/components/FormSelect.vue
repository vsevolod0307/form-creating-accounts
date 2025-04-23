<template>
    <select class="select form-select" v-model="value">
        <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.title }}</option>
    </select>
</template>

<script setup lang="ts">
    import { PropType, ref } from "vue";

    interface ListItem {
        title: string,
        value: "local" | "ldap",
    }

    const props = defineProps({
        options: {
            type: Object as PropType<ListItem[]>,
            default: [],
        },
        selectedValue: {
            type: String,
            default: "local"
        }
    })

    const value = ref(props.selectedValue);
</script>