<template>
    
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >

          <v-divider></v-divider>
  
          <v-list density="compact"  nav>
            <router-link to="/clients">
              <v-list-item prepend-icon="mdi mdi-account" title="Клиенты" value="clients"></v-list-item>
            </router-link>
            <router-link to="/coaches">
              <v-list-item prepend-icon="mdi-dumbbell" title="Тренеры" value="shared"></v-list-item>
            </router-link>
            <v-list-item prepend-icon="mdi-account-multiple" title="Групповые занятия" value="starred"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Абонeменты" value="starred"></v-list-item>
            <v-list-item prepend-icon="mdi mdi-bookmark-box-multiple" title="Отчеты" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-app-bar>
            <a class="ml-5" href="">
              <router-link to="/clients/add">
                Добавить клиента
              </router-link>
            </a>
            <v-spacer></v-spacer>
            <v-text-field class="mt-4"></v-text-field>
            <v-spacer></v-spacer>
            <div class="avatar__wrapper">
              <v-avatar color="surface-variant" class="mr-4"></v-avatar>
            </div>
            <v-btn class="text-none" stacked>
              <v-badge content="2" >
                <v-icon>mdi-bell</v-icon>
              </v-badge>
            </v-btn>
            <v-btn @click.prevent="logout()">
              Выйти
            </v-btn>
        </v-app-bar>
        
        <v-main style="min-height: 300px;">
            <router-view/>
        </v-main>
      </v-layout>
    
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../helpers/instance'
export default {
  methods:{
    logout(){
      axios.post(`${BASE_URL}/auth/token/logout/`,
      {
        
      },
      {
        headers:{
          Authorization: 'Token ' + sessionStorage.getItem('usertoken')
        }
      }).then((response)=>{
        sessionStorage.clear()
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .v-navigation-drawer{
        
    }
    .v-list{
        
    }
    .v-layout{
        
    }

    .avatar__wrapper{
        border-right: 0.5px solid rgba(51, 51, 51, 0.6);
    }

    .v-toolbar__content{
        height: 90px;
    }
</style>