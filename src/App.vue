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
export default {
  

  computed: {
    layout(){
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  },
  components: {
      AuthLayout
    }
}
</script>

<style lang="scss" scoped>

</style>
