<template>
    <div class="login">
        <h2>Авторизация</h2>
        <v-form>
            <v-text-field
                v-model="form.username"
                label="Логин"
                placeholder="Almatulus"
                variant="outlined"
                clearable
                hint="Введите правильный логин для входа"
                class="mt-10 "
                maxLength="150"
                :class="v$.form.username.$error ? 'invalid-input' : ''"
                @change="resetErrors"
            ></v-text-field>
            <p class="invalid-feedback" v-if="v$.form.username.$dirty && v$.form.username.$error">Поле "Логин" должно быть заполнено</p>
            <v-text-field
                v-model="form.password"
                label="Пароль"
                placeholder="Пароль"
                variant="outlined"
                clearable
                hint="Введите правильный пароль для входа"
                class="mt-4"
                maxLength="150"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :class="v$.form.password.$error ? 'invalid-input' : ''"
                @change="resetErrors"
            ></v-text-field>
            <p class="invalid-feedback" v-if="v$.form.password.$dirty && v$.form.password.$error">Поле "Пароль" должно быть заполнено</p>
            
            <template v-for="error in errors" :key="error">
                <p class="invalid-feedback mt-2">{{error}}</p>
            </template>
            
            <div class="d-flex justify-end">
                <v-btn
                type="submit"
                color="primary"
                class="mt-4"
                @click.prevent="SubmitHandler()"
                :loading="loader"
                :disabled="loader"
                >
                    Войти
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../../helpers/instance'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
    setup () {
        return { v$: useValidate() }
    },
    data: () => ({
        showPassword: false,
        form: {
            username: '',
            password: ''
        },
        errors: [],
        loader: false
    }),
    validations () {
        return {
            form:{
                username: {required},
                password: {required}
            }
        }
    },
    methods:{
        async SubmitHandler(){  
            this.v$.$touch()
            if(!this.v$.$error){
                this.loader=true
                axios.post(`${BASE_URL}/auth/token/login/`,{
                    username: this.form.username,
                    password: this.form.password
                })
                .then((response) => {
                    sessionStorage.setItem('usertoken', response.data.auth_token);
                    this.$router.push('/clients')
                })
                .catch((error) => {
                    this.loader=false
                    if(error.response.data.non_field_errors){
                        for(let i in error.response.data.non_field_errors){
                            this.errors.push(error.response.data.non_field_errors[i])
                        }
                    }
                })
            }
            
        },
        resetErrors(){
            if(this.errors){
                this.errors = ''
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>


</style>