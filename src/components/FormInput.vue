<template>
    <div class="form-input">
        <input 
            class="form-control"
            :class="{ 'form-error': !isValid }"
            v-model="value" 
            :type="type"
            :name="name"
            :placeholder="placeholder"
            @blur="onBlur">
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const props = defineProps({
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "",
        },
        maxLength: {
            type: Number,
            default: 100,
        },
        name: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            default: false,
        }
    })

    const emit = defineEmits(["valid"])

    const value = ref("");
    const isValid =  ref(true);

    const onBlur = () => {
        isValid.value = props.maxLength >= value.value.length;
        if(!value.value && props.required) {
            isValid.value = false;
        }
        emit("valid", { name: props.name, valid: isValid.value });
    }
</script>

<style scoped>
    .form-input {
        width: 100%;
    }

    .form-error {
        border: 2px solid red;
    }
</style>