<template>
  <div class="main">
     <v-card class="mx-auto overflow-hidden card">
        <v-app-bar color="rgb(38, 50, 56)" prominent:height="58">
           <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="title">Fitness</v-toolbar-title>
           <v-spacer></v-spacer>

           <v-spacer></v-spacer>

              <!-- <div class="mr-5">
                  <v-toolbar-title class="mt-4" style="font-size: 15px">{{username}}</v-toolbar-title>
                  
              </div> -->
              <!-- <v-btn @click="logout()" color="primary" small class="mt-3">
                  Выйти
              </v-btn> -->

              </v-app-bar>

              <v-navigation-drawer
              v-model="drawer"
              absolute
              bottom
              temporary
              color=""
              >
              <v-list
                  nav
                  dense
              >
                  <v-list-item-group 
                  v-model="group"
                  active-class="deep-purple--text text--accent-4">

                  <router-link to="/clients">
                      <v-list-item>
                          <v-list-item-title>Клиенты</v-list-item-title>
                      </v-list-item>
                  </router-link>

                  <router-link to="/trainers">
                      <v-list-item>
                          <v-list-item-title>Тренеры</v-list-item-title>
                      </v-list-item>
                  </router-link>


                 

                  </v-list-item-group>
                  
              </v-list>
          </v-navigation-drawer>
          <router-view/>
          </v-card>
  </div>
</template>



<script>
import axios from 'axios'
import { BASE_URL } from '../helpers/const'
export default {
    data: () => ({
        username: '',
        role: '',
        drawer: false,
        group: null,
    }),
    methods:{
        logout(){
            axios.post(`/auth/token/logout/`,
            {
            },
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            }).then(() => {
                this.$router.push('/login')
                localStorage.clear()
            })
        },
        getUserName(){
            axios.get(`/auth/users/`,
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            }).then((response) => {
               
                this.username = response.data[0].username,
                localStorage.setItem('user_id', response.data[0].id)
                this.getUserRole()
            })
        },
        mounted(){
        this.getUserName()
    },
    watch: {
      group () {
        this.drawer = false
      },
    }
    }}
</script>