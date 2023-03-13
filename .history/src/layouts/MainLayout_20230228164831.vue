<template>
  <div class="main">
     <v-card class="mx-auto overflow-hidden card">
        <v-app-bar color="violet" prominent:height="18">
            <v-spacer></v-spacer>
           <router-link to="/clients/сlientsadd">
                <p> Добавить клиента </p>
            </router-link>

            <v-spacer></v-spacer>
            <v-card-text class="search" >
                <v-text-field
                class="search"
                
                    :loading="loading"
                    density="compact"
                    variant="solo"
                  
                    label="Поиск"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    @click:append-inner="onClick"
                ></v-text-field>
            </v-card-text>

           <v-spacer></v-spacer>

           <v-avatar>
             <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" ></v-img>
           </v-avatar>
          
           <v-btn class="text-none" stacked>
      <v-badge content="2" color="error">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>


              <div class="mr-5">
                <v-toolbar-title class="mt-4" style="font-size: 15px">{{username}}</v-toolbar-title>
                  </div> 
               <!-- <v-btn @click="logout()" color="primary" small class="mt-3">
                  Выйти
              </v-btn> -->

              </v-app-bar>

              <v-navigation-drawer
              permanent
              floating
              color="#E6E6FA" 
             
              >
              <v-list class="item" >
                  
                  <router-link to="/clients">
                     <v-list-item prepend-icon="mdi-account" title="Клиенты" value="clients"></v-list-item>
                  </router-link>

                  <router-link to="/trainers">
                          <v-list-item prepend-icon="mdi-dumbbell" title="Тренеры"></v-list-item>
                  </router-link>

                  <router-link to="/groups">
                     <v-list-item prepend-icon="mdi-account-multiple" title="Групповые занятия" value="groups"></v-list-item>
                  </router-link>

                  <router-link to="/abonements">
                     <v-list-item prepend-icon="mdi-minus-box-multiple" title="Абонементы" value="abonements"></v-list-item>
                  </router-link>

                  <router-link to="/groups">
                     <v-list-item prepend-icon="mdi-book-account" title="Отчеты" value="reports"></v-list-item>
                  </router-link>    
                  
              </v-list>
              </v-navigation-drawer>
              <v-main style="height: 250px"></v-main>
          </v-card>
  </div>
</template>



<script>
import axios from 'axios'
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
   
    }}
</script>
<style lang="scss" scoped>
.main {
    height: 100%;
		&__inner {
            
		}
        &__menu{
            margin-left: 20px;
        }
		&__nav-btn {
            margin-left: 10px;
		}
		&__content {
            
		}
        &__user-header{
            display: flex;
            align-items: center;
            p{
                margin: 0;
                
            }
        }
}
.card{
    height: 100%;
}
.title{
    font-family: "Lucida Console";
    font-size: 1.53rem !important;
    color:rgb(213, 211, 211);
    
}
.mt-4{
    color: aliceblue;
}
.v-toolbar__content{
    .v-btn{
        color:#d4d4d4;
    }
}
.item{
    margin:0;
    position: absolute;
    top: 30%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%) ;

}
.search{
    border-radius: 70%;
}
</style>