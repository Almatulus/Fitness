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
                :error-messages="usernameErrors"
                @input="v$.form.username.$touch()"
                @blur="v$.form.username.$touch()"
            ></v-text-field>
            <!-- <p>{{usernameErrors}}</p> -->
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
            ></v-text-field>
            <template v-for="error in errors" :key="error">
                <p class="invalid-feedback">{{error}}</p>
            </template>
            <div class="d-flex justify-end">
                <v-btn
                type="submit"
                color="primary"
                class="mt-4"
                @click.prevent="SubmitHandler()"
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
    data: () => ({
        v$: useValidate(),
        showPassword: false,
        form: {
            username: '',
            password: ''
        },
        errors: []
    }),
    computed:{
        usernameErrors () {
            const errors = []
            if (!this.v$.form.username.$dirty) return errors
            !this.v$.form.username.required && errors.push('Данное поле обязательно для заполнения')
            return errors
        },
        passwordErrors(){
            const errors = []
            if (!this.v$.form.password.$dirty) return errors
            !this.v$.password.required && errors.push('Данное поле обязательно для заполнения')
            return errors
        }
    },
    validations:{
        
            form: {
                username: {required},
                password: {required}
            }
        },
    methods:{
        SubmitHandler(){
            this.v$.$touch()
            if(!this.v$.$error){
                axios.post(`${BASE_URL}/auth/token/login/`,{
                    username: this.form.username,
                    password: this.form.password
                })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    if(error.response.data.non_field_errors){
                        for(let i in error.response.data.non_field_errors){
                            this.errors.push(error.response.data.non_field_errors[i])
                        }
                    }
                })
            }
            
        }
    }
    
}
</script>

<style lang="scss" scoped>


</style>