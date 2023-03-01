<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view/>
      </component>
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
  

  computed: {
    layout(){
      return (this.$route.meta.layout || 'auth') + '-layout'
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
</style>
