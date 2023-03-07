<template>
    <div class="abonements">
       <div class="abonements__inner">
             
        <v-col
            class="text"
            cols="3"
            
            md="9" >
      <v-text-field
        
        variant="outlined"
        label="Поиск клиентов"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      </v-col>

           </div>
           </div>
</template>
 <script>
  export default {
    data: () => ({
     
    }),

    methods: {
      onClick () {
        this.loading = true

       
      },
    },
  }
</script>

<style lang="scss" scoped>
 .abonements{
    // height:3460px;
    // width: 1560px;
    width: 100%;
    margin: 100%;
    margin-top: 64px;
    margin-left: 16.5%; 
    margin-right: 20%;
 }
 </style>