<template>
    <div class="client">
        <v-overlay
        :model-value="loader"
        class="align-center justify-center"
        >
            <v-progress-circular
            color="primary"
            indeterminate
            size="64"
            ></v-progress-circular>
        </v-overlay>
        <v-container>
            <div class="client__inner">
                <v-row>
                    <v-col cols="2">
                        <router-link to="/clients">
                            <v-btn
                            color="primary"
                            prepend-icon="mdi-arrow-left-thick"
                            >
                                Назад
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center">
                    <v-col class="mr-4" cols="3">
                        <v-img
                        class="bg-white"
                        width="180"
                        :aspect-ratio="1"
                        src=""
                        ></v-img>
                    </v-col>
                    <v-col>
                        <h3>
                            {{clientInfo.name}}
                        </h3>
                        <p class="mt-4">
                            {{clientInfo.phone}}
                        </p>
                        <p class="mt-3">
                            {{clientInfo.email}}
                        </p>
                        
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col cols="4">
                        <p class="subtitle">Абонемент</p>
                        <v-card class="mt-7">
                            <h4 class="subtitle">{{subscription.title}}</h4>
                            <p class="mt-3">{{subscription.description}}</p>
                            <v-list lines="one">
                                <v-list-item
                                    v-for="item in items"
                                    :key="item.title"
                                    :title="item.title"
                                    prepend-icon="mdi-check-bold"
                                >
                                
                                </v-list-item>
                            </v-list>
                            <div class="">

                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
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
        items: [
            {title: 'Мобильное приложение'},
            {title: 'Расторжение в любой момент'},
            {title: '4 гостевых визита в подарок'},
        ],
        clientInfo: {},
        subscription: {},
        loader: true
    }),
    methods:{
        async getClientProfileInfo(){
            axios.get(`${BASE_URL}/api/clients/${this.$route.params.id}/profile/`,{
                headers:{
                    Authorization: 'Token ' + sessionStorage.getItem('usertoken')
                }
            })
            .then((response) => {
                console.log(response.data)
                this.clientInfo = response.data,
                this.subscription = response.data.subscription
                this.loader = false
            })
        }
    },
    mounted(){
        this.getClientProfileInfo()
    }
}
</script>

<style lang="scss" scoped>
.v-card{
    padding: 25px 30px;
    
}
</style>