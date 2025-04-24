<template>
    <div class="form-group">
        <form-input :formValue="marks" placeholder="Значение" :maxLength="50" name="mark" @valid="valid"/>
        <form-select :options="options" name="type" :selectedValue="data.type" @valid="valid"/>
        <div class="form-inputs d-flex">
            <form-input :formValue="data.login" placeholder="Логин" name="login" required @valid="valid"/>
            <form-input v-if="isLocal" :formValue="data.password" placeholder="Пароль" name="password" required type="password" @valid="valid"/>
        </div>
        <div class="form-delete" @click="store.deleteForm(data.id)">
            <svg class="form-delete__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch, computed } from "vue";
import { useMainStore } from "@/store";
import { Validation, Data } from "@/types";
import FormInput from "@/components/FormInput.vue";
import FormSelect from "@/components/FormSelect.vue";

const props = defineProps({
    data: {
        type: Object as PropType<Data>,
    }
})

const emit = defineEmits(["valid"]);

const store = useMainStore();
const isValidForm = ref(false);
const selectedLocal = ref(true);
const isLocal = computed(() => props.data?.type === "local" || selectedLocal.value)
const checkValidation = ref<Validation[]>([
    {
        name: "mark",
        valid: !!props.data?.mark || false,
        value: props.data?.mark.map(i => i.text).join(";")
    },
    {
        name: "type",
        valid: true,
        value: props.data?.type,
    },
    {
        name: "login",
        valid: !!props.data?.login || false,
        value: props.data?.login,
    },
    {
        name: "password",
        valid: !!props.data?.password || false,
        value: isLocal.value ? props.data?.password : null,
    },
]);

selectedLocal.value = props.data?.type === "local";

const marks = computed(() => props.data?.mark.map(i => i.text).join(";"));

const valid = (value: Validation) => {
    checkValidation.value = checkValidation.value.filter(item => item.name !== value.name)
    checkValidation.value.push(value)
    if(value.name === "type") {
        selectedLocal.value = value.value === "local";
    }  
}

watch(() => checkValidation.value, () => {
    isValidForm.value = checkValidation.value.every(item => item.valid)
    isValidForm.value && emit("valid", checkValidation.value);
})

const options = ref([
    {
        title: "Локальный",
        value: "local",
    },
    {
        title: "LDAP",
        value: "ldap"
    }
])
</script>

<style scoped>
    .form-group {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr auto;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }

    .form-inputs {
        gap: 20px;
    }

    .form-delete {
        cursor: pointer;
    }

    .form-delete__icon {
        width: 24px;
        height: 24px;
    }
</style>