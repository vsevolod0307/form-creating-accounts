<template>
    <div class="form-creating">
        <form-add/>
        <div class="alert alert-secondary d-flex align-items-center mt-4" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" class="main-alert bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
            </div>
        </div>
        <div class="form-header">
            <div class="form-header__title">Метки</div>
            <div class="form-header__title">Тип записи</div>
            <div class="form-header__title">Логин</div>
            <div class="form-header__title">Пароль</div>
        </div>
        <form-group v-for="form in forms" :data="form" :key="form.id" @valid="valid(form.id, $event)"/>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useMainStore } from "@/store";
import { Validation, Data } from "@/types";
import FormAdd from "@/components/FormAdd.vue";
import FormGroup from "@/components/FormGroup.vue";

const store = useMainStore();

const forms = computed(() => store.data);

const valid = (id: number, data: Validation[]) => {
    let resultData: Data = {
        id,
        mark: [{ text: "" }],
        type: "",
        login: "",
        password: "",
    };
    
    data.forEach(item => {
        if(item.value) {
            if(item.name === "mark") {
                resultData[item.name] = item.value.split(";").map(item => ({ text: item }))
            }

            if(item.name === "login" || item.name === "password" || item.name === "type") {
                resultData[item.name] = item.value;
            }

            if(item.name === "type" && item.value === "ldap") {
                resultData.password = null;
            }
        }
    })
    
    store.updateForm(id, resultData)
    
}
</script>

<style scoped>
    .main-alert {
        width: 20px;
    }

    .form-header {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: flex-start;
        margin-bottom: 10px;
    }

    .form-header__title {
        font-size: 12px;
        font-weight: 600;
    }
</style>