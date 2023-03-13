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
                <router-link to="/clients">
                <v-btn @click.prevent="submitHandler()" color="primary" class="mt-4 justify center" >
                    Войти
                </v-btn>
                </router-link>
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
                axios.post(`/auth/token/login/`,
                {
                    username:this.username,
                    password: this.password
                }).then((response) => {
                    localStorage.setItem('Token', response.data.auth_token)
                    console.log(localStorage.getItem('Token'))
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