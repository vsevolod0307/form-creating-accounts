<template>
    <select class="select form-select" v-model="value" @change="onChange">
        <option 
            v-for="(option, index) in options" 
            :key="index" 
            :value="option.value">{{ option.title }}
        </option>
    </select>
</template>

<script setup lang="ts">
    import { PropType, ref } from "vue";
    import { ListItem } from "@/types";

    const props = defineProps({
        options: {
            type: Object as PropType<ListItem[]>,
            default: [],
        },
        selectedValue: {
            type: String,
            default: "local"
        },
        name: {
            type: String,
            required: true,
        }
    })

    const emit = defineEmits(["valid"])

    const isValid =  ref(true);
    const value = ref(props.selectedValue);

    const onChange = () => {
        isValid.value = !!value.value;
        emit("valid", { name: props.name, valid: isValid.value });
    }
</script>