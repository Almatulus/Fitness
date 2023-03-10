<template>
    <div class="client-add">
        <v-container>
            <div class="client-add__inner">
                <v-row>
                    <h3>Добавить клинета</h3>
                </v-row>
                <v-row class="mt-10">
                    <v-col v-for="subscription in subscriptions" :key="subscription.id">
                        <v-card @click.prevent="activeSubscription = subscription" :class="{'active-card': activeSubscription === subscription}" width="262" height="384" class="d-flex flex-column justify-space-between">
                            <v-card-item>
                                <v-card-title>{{subscription.title}}</v-card-title>

                                <v-card-subtitle class="mt-4">{{subscription.description}}</v-card-subtitle>
                            </v-card-item>

                            <v-card-item>
                                <v-card-title>{{subscription.price}} тг</v-card-title>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <p>Способ оплаты</p>
                        <div class="mt-3 d-flex">
                            <v-col v-for="payment in paymentList" :key="payment.id" cols="4">
                                <v-card @click.prevent="activePayment = payment" :class="{'active-card': activePayment === payment}" width="173" height="173" class="text-center">
                                    <div :class="payment.icon"></div>
                                    <div class="v-card__inner-text">{{payment.title}}</div>
                                </v-card>
                            </v-col>
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <p>Выбрать срок</p>
                        <div class="mt-3 d-flex align-center">
                            <v-col v-for="term in termList" :key="term.id" cols="4">
                                <v-card @click.prevent="activeTerm = term" :class="{'active-card': activeTerm === term}" width="160" height="52" class="text-center v-card__term-padding">
                                    <div class="v-card__inner-text">{{term.title}}</div>
                                </v-card>
                            </v-col>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-end mt-5 mb-5">
                    <div class="d-flex align-center">
                        <div class="">
                            Итого: 14999 тг
                        </div>
                        <v-btn
                        color="primary"
                        class="ml-5"
                        >
                            Оплатить
                        </v-btn>
                    </div>
                </v-row>
            </div>
        </v-container>
    </div>
</template>


<script>
import axios from 'axios'
import { BASE_URL } from '../../helpers/instance'
export default {
    data: () => ({
        subscriptions: [],
        paymentList: [
            {
                id: 1,
                icon: 'mdi mdi-qrcode-scan',
                title: 'QR-код'
            },
            {
                id: 2,
                icon: 'mdi mdi-credit-card-outline',
                title: 'Карта'
            },
            {
                id: 3,
                icon: 'mdi mdi-cash-multiple',
                title: 'Наличные'
            }
        ],
        termList: [
            {
                id: 1,
                title: '1 месяц'
            },
            {
                id: 2,
                title: '3 месяца'
            },
            {
                id: 3,
                title: '6 месяцев'
            }
        ],
        activeSubscription: 0,
        activePayment: 0,
        activeTerm: 0
    }),
    methods:{
        async getBranch(){
            axios.get(`${BASE_URL}/api/branch/get/`,
            {
            headers:{
                Authorization: 'Token ' + sessionStorage.getItem('usertoken')
            }
            })
            .then((response)=>{
                console.log(response.data)
                this.getSubscriptions(response.data.branch_id)
            })
        },
        async getSubscriptions(id){
            axios.get(`${BASE_URL}/api/branch/${id}/subscriptions/`,
            {
            headers:{
                Authorization: 'Token ' + sessionStorage.getItem('usertoken')
            }
            })
            .then((response)=>{
                console.log(response.data)
                this.subscriptions = response.data
            })
        }
    },
    created(){
        this.getBranch()
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.v-card{
    cursor: pointer;
}

.v-card__term-padding{
    padding: 14px 25px;
}

</style>