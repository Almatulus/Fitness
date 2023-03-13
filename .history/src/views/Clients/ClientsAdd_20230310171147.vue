<template>
    <v-dialog
      v-model="dialog"
      width="auto"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-text>
          Вы успешно сохранили клиента!
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="client-add">
        <v-container>
            <div class="client-add__inner">
                <v-row>
                    <h3>Добавить клинета</h3>
                </v-row>
                <v-form>
                    <v-row>
                        <v-col cols="4">
                            <v-file-input
                                class="mt-9"
                                label="Вставить фото"
                                variant="solo"
                                prepend-icon="mdi-camera"
                                accept="image/png, image/gif, image/jpeg"
                                id="file"
                                ref="file"
                                v-on:change="handleFileUpload"
                            ></v-file-input>
                        </v-col>
                        <v-col class="mt-3" cols="8">
                            <v-row>
                                <p class="form-col-title">Личные данные</p>
                            </v-row>
                            <v-row class="d-flex">
                                <v-col cols="6">
                                    <v-text-field
                                    label="Логин"
                                    variant="solo"
                                    clearable
                                    v-model="form.username"  
                                    :error-messages="v$.form.username.$errors.map(e => e.$message)"                           
                                    ></v-text-field>
                                    <!-- <p class="invalid-feedback mb-4" v-if="v$.form.username.$dirty && v$.form.username.$error">Поле "Логин" должно быть заполнено</p> -->

                                    <v-text-field
                                    label="Фамилия"
                                    variant="solo"
                                    clearable
                                    v-model="form.secondName"
                                    :error-messages="v$.form.secondName.$errors.map(e => e.$message)"                                   
                                    ></v-text-field>

                                    <v-text-field
                                    label="Имя"
                                    variant="solo"
                                    clearable
                                    v-model="form.name"
                                    :error-messages="v$.form.name.$errors.map(e => e.$message)"
                                    ></v-text-field>

                                    <v-text-field
                                    label="Дата рождения"
                                    variant="solo"
                                    clearable
                                    type="date"
                                    v-model="form.birthDate"
                                    :error-messages="v$.form.birthDate.$errors.map(e => e.$message)"
                                    ></v-text-field>
                                    
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                    label="Пароль"
                                    variant="solo"
                                    clearable
                                    v-model="form.password"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword = !showPassword"     
                                    :error-messages="v$.form.password.$errors.map(e => e.$message)"                              
                                    ></v-text-field>

                                    <v-text-field
                                    label="Повторите пароль"
                                    variant="solo"
                                    clearable
                                    v-model="form.repeatPassword"
                                    :append-icon="showPasswordRepeat ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPasswordRepeat ? 'text' : 'password'"
                                    @click:append="showPasswordRepeat = !showPasswordRepeat"    
                                    :error-messages="v$.form.repeatPassword.$errors.map(e => e.$message)"                               
                                    ></v-text-field>

                                    <v-select
                                    label="Пол"
                                    :items="genderList"
                                    variant="solo"
                                    item-text="title"
                                    item-value="value"
                                    clearable
                                    v-model="form.gender"
                                    :error-messages="v$.form.gender.$errors.map(e => e.$message)"  
                                    ></v-select>
                                    {{form.gender}}
                                    <v-text-field
                                    label="Email"
                                    variant="solo"
                                    clearable
                                    v-model="form.email"
                                    :error-messages="v$.form.email.$errors.map(e => e.$message)"  
                                    ></v-text-field>

                                    <v-text-field
                                    label="Телефон"
                                    variant="solo"
                                    clearable
                                    v-model="form.phone"
                                    v-maska data-maska="#-#"
                                    :error-messages="v$.form.phone.$errors.map(e => e.$message)"  
                                    ></v-text-field>
                                    
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <div class="">
                                <p class="form-col-title">Номер карты</p>
                                <v-text-field
                                class="mt-2"
                                label="Номер карты"
                                placeholder="4000 0012 3456 7899"
                                variant="solo"
                                clearable
                                v-model="form.card.number"
                                ></v-text-field>
                            </div>
                            <div class="">
                                <p class="form-col-title">Имя на карте</p>
                                <v-text-field
                                class="mt-2"
                                label="Имя на карте"
                                placeholder="Серикбай Абзал"
                                variant="solo"
                                clearable
                                v-model="form.card.name"
                                ></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="">
                                <p class="form-col-title">Истекающий срок</p>
                                <v-text-field
                                class="mt-2"
                                label="Истекающий срок"
                                type="date"
                                variant="solo"
                                clearable
                                v-model="form.card.date"
                                ></v-text-field>
                            </div>
                            <div class="">
                                <p class="form-col-title">Код безопасности</p>
                                <v-text-field
                                class="mt-2"
                                label="Код безопасности"
                                placeholder="4312"
                                variant="solo"
                                clearable
                                v-model="form.card.CVV"
                                ></v-text-field>
                            </div>
                        </v-col>
                        <div style="width: 100%" class="d-flex justify-end">
                            <v-btn
                            @click.prevent="SubmitHandler()"
                            color="primary"
                            class="mt-4"
                            :loading="loader"
                            :disabled="loader"
                            >
                                Войти
                            </v-btn>
                        </div>
                    </v-row>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../../helpers/instance'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { vMaska } from "maska"
export default {
    setup () {
        return { v$: useValidate() }
    },
    data: () => ({
        genderList: [
            {
                title: 'Мужской',
                value: 'Male'
            },
            {
                title: 'Женский',
                value: 'Female'
            }
        ],
        form:{
            file: '',
            username: '',
            password: '',
            repeatPassword: '',
            secondName: '',
            name: '',
            birthDate: '',
            gender: '',
            email: '',
            phone: '',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            card: {
                number: '',
                name: '',
                date: '',
                CVV: ''
            }
        },
        showPassword: false,
        showPasswordRepeat: false,
        dialog: false,
    }),
    methods:{
        async SubmitHandler(){  
            this.v$.$touch()
            if(!this.v$.$error){
                this.loader=true
                let formData = new FormData()
                formData.append('file', this.file);
                axios.post(`${BASE_URL}/api/clients/create/`,{
                    credit_card: {
                        card_number: this.form.card.number,
                        name_on_card: this.form.card.name,
                        expiry_date: this.form.card.date,
                        security_code: this.form.card.CVV
                    },
                    user: {
                        username: this.form.username,
                        password: this.form.password,
                        first_name: this.form.name,
                        last_name: this.form.secondName,
                        phone: this.form.phone,
                        gender: this.form.gender,
                        email: this.form.email,
                        is_client: true
                    }
                },
                {
                    headers:{
                        Authorization: 'Token ' + sessionStorage.getItem('usertoken')
                    }
                })
                .then((response) => {
                    this.loader=false
                    this.dialog=true
                    console.log(response.data)
                })
                .catch((error) => {
                    this.loader=false
                    console.log(error.data)
                })
            }
        },
        handleFileUpload: function(file){
            this.file = file;
            this.error = ''
        }
    },
    validations(){
        return {
            form:{
                username: {required},
                password: {required},
                repeatPassword: {required},
                secondName: {required},
                name: {required},
                birthDate: {required},
                gender: {required},
                email: {required},
                phone: {required}
            }
        }
    },
    directives: { maska: vMaska }
}
</script>

<style lang="scss" scoped>
.client-add {
	&__inner {
	}
}
.invalid-feedback{
    font-size: 16px;
}
</style>