<template>
    <div class="coaches">
        <v-container>
            <div class="coaches__inner">
              <v-row> Редактирование клиента</v-row>
              <v-form>
                <v-row>
                    <v-col cols="4">
                        <v-file-input class="mt-9"
                        label="Изменить фото"
                        variant="solo"
                        prepend-icon="mdi-camera"
                        accept="image/png, image/gif, image/jpeg"
                        id="file"
                        ref="file"
                        v-on:change="handleFileUpload"></v-file-input>
                    </v-col>
                    <v-col class="mt-3" cols="8" ></v-col>
                    <v-row>
                        <p class="form-col-title">Личные данные</p>
                    </v-row>
                    <v-row class="d-flex" >
                        <v-col cols="6">
                            <v-text-field
                            label="Логин"
                            variant="solo"
                            clearable
                            v-model="form.usernametr"
                            :error-messages="v$.form.usernametr.$errors.map(e => e.$message)"></v-text-field>

                            <v-text-field 
                            label="Фамилия"
                            variant="solo"
                            clearable
                            v-model="form.secondNametr"
                            :error-messages="v$.form.secondNametr.$errors.map(e => e.$message)"></v-text-field>

                            <v-text-field 
                            label="Имя"
                            variant="solo"
                            clearable
                            v-model="form.nametr"
                            :error-messages="v$.form.nametr.$errors.map(e => e.$message)"></v-text-field>

                            <v-text-field 
                            label="Специальность"
                            variant="solo"
                            clearable
                            v-model="form.profession"
                            :error-messages="v$.form.profession.$errors.map(e => e.$message)"></v-text-field>
                            </v-col>

                            <v-col cols="6">

                            <v-text-field
                            label="Телефон"
                            variant="solo"
                            clearable
                            v-model="form.phonetr"
                            
                            :error-messages="v$.form.phonetr.$errors.map(e => e.$message)"  ></v-text-field>

                            <v-text-field
                            label="Стаж"
                            variant="solo"
                            clearable
                            v-model="form.year"
                            :error-messages="v$.form.year.$errors.map(e => e.$message)"  ></v-text-field>

                            <v-text-field
                            label="Прайс"
                            variant="solo"
                            clearable
                            v-model="form.price"
                            :error-messages="v$.form.price.$errors.map(e => e.$message)"  ></v-text-field>

                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="О тренере"
                            variant="solo"
                            clearable
                            v-model="form.year"  ></v-text-field>
                        </v-col>
                        </v-row>
                        
                </v-row>
                <v-row>
                        <v-col cols="6">
                            <div class="">
                                <v-text-field
                                class="mt-2"
                                label="Facebook"
                                
                                variant="solo"
                                clearable
                                v-model="form.facebook"
                                ></v-text-field>
                            </div>
                            
                            <div class="">
                               
                                <v-text-field 
                                class="mt-2"
                                label="Instagram"
                              
                                variant="solo"
                                clearable
                                v-model="form.instagram"
                                ></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="">
                                <p class="form-col-title">Банковские данные</p>
                                <v-text-field
                                class="mt-2"
                                label="Номер карты"
                                placeholder="4000 0012 3456 7899"
                                variant="solo"
                                clearable
                                v-model="form.card.numbertr"
                                ></v-text-field>
                            </div>
                            <div class="">
                                <v-text-field
                                class="mt-2"
                                label="Имя на карте"
                                placeholder="Серикбай Абзал"
                                variant="solo"
                                clearable
                                v-model="form.card.nametr"
                                ></v-text-field>
                            </div>
                        </v-col>
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

export default {
    setup () {
        return { v$: useValidate() }
    },
    data: () => ({
       
        form:{
            file: '',
            usernametr: '',
            secondNametr: '',
            nametr: '',
            profession: '',
            year: '',
            price: '',
            phonetr: '',
            instagram: '',
            facebook: '',
            card: {
                numbertr: '',
                nametr: '',
               
            }
        },
       
        dialog: false,
    }),
    methods:{
        async SubmitHandler(){  
            this.v$.$touch()
            if(!this.v$.$error){
                this.loader=true
                let formData = new FormData()
                formData.append('file', this.file);
                axios.post(`${BASE_URL}/api/coaches/`,{
                    credit_card: {
                        card_number: this.form.card.numbertr,
                        name_on_card: this.form.card.nametr,
                       
                    },
                    user: {
                        username: this.form.usernametr,
                        first_name: this.form.nametr,
                        last_name: this.form.secondNametr,
                        phone: this.form.phonetr,
                        profession: this.form.profession,
                        year: this.form.year,
                        price: this.form.price,
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
                usernametr: {required},
                secondNametr: {required},
                nametr: {required},
                profession: {required},
                year: {required},
                price: {required},
                phonetr: {required}
            }
        }
    }
}
</script>
