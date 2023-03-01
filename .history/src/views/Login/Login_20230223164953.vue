<template>
    <div class="login">
        <h2 class="log">Вход</h2>
        <v-form>
            <v-text-field
                v-model="username" 
                label="Логин"
                placeholder="Almatulus"
                variant="outlined"
                clearable
                hint="Введите правильный логин для входа"
                class="mt-10 "
                
            ></v-text-field>
            <v-text-field
                v-model="password" 
                label="Пароль"
                placeholder="Пароль"
                variant="outlined"
                clearable
                hint="Введите правильный пароль для входа"
                class="mt-4"
            ></v-text-field>
            <div class="d-flex justify-end">
                <v-btn
                @click.prevent="submitHandler()"
                color="primary"
                class="mt-4"
                justify align-center 
                >
                    Войти
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../../helpers/const'
export default {
    data: () => ({
        username: '',
        password: '',
        showPassword: false,
        error: ''
    }),
    methods:{
        submitHandler(){
                axios.post(`${BASE_URL}/auth/token/login/`,
                {
                    username:this.username,
                    password: this.password
                }).then((response) => {
                    console.log(response.data)
                })
                
            
        }
    }

    
}
</script>

<style lang="scss" scoped>
.log {
    text-align: center;
}

</style>