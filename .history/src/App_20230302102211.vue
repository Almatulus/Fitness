<template>
  <v-app>
    <v-navigation-drawer  expand-on-hover rail class="vnav" >
              
              <v-list class="vna" density="default" nav >
              <router-link to="/clients">
                 <v-list-item  class="textt" prepend-icon="mdi-account" title="Клиенты"  value="clients"></v-list-item>
              </router-link>

              <router-link to="/trainers">
                      <v-list-item class="textt" prepend-icon="mdi-dumbbell" title="Тренеры" value="trainers"></v-list-item>
              </router-link>

              <router-link to="/groups">
                 <v-list-item prepend-icon="mdi-account-multiple" title="Групповые занятия" value="groups"></v-list-item>
              </router-link>

              <router-link to="/abonements">
                 <v-list-item prepend-icon="mdi-minus-box-multiple" title="Абонементы" value="abonements"></v-list-item>
              </router-link>

              <router-link to="/reports">
                 <v-list-item prepend-icon="mdi-book-account" title="Отчеты" value="reports"></v-list-item>
              </router-link>    
            </v-list>
          
          </v-navigation-drawer>    
    <v-main>
      
        <router-view/>
      
    </v-main>
  </v-app>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  name: 'App',
  data: () => ({

  }),
  
//

  computed: {
    layout(){
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
      AuthLayout,
      MainLayout
    }
}
</script>

<style lang="scss" scoped>
 @import 'assets/styles/nullstyle.scss';
    @import 'assets/styles/main.scss';
    @import 'assets/styles/style.scss';
    .vna{
    margin-top: 35px;
    margin-left: 10px;
    font-size: 1.05rem ;
}
</style>
