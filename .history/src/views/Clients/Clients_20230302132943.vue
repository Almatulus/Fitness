
<template>
    <div class="clients">
        <div class="clients__inner">
            
            <br>
            <br>
           
            <v-col
            class="text"
            cols="3"
            
            md="12" >
      <v-text-field
        
        variant="solo"
        label="Поиск"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      </v-col>
                

            </div>
            <v-table>
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                           
                        </th>
                        <th class="text-left">
                           ФИО
                        </th>

                        <th class="text-left">
                           Телефон
                        </th>

                        <th class="text-left">
                            Абонемент
                        </th>
                    
                        <th class="text-left">
                            Дата завершения
                        </th>
                        <th class="text-left">
                           Дата последнего посещения 
                        </th>
                        
                    </tr>
                </thead>
               
                </template>
            </v-table>
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
 .clients{
    // height:3460px;
    // width: 1560px;
    width: 100%;
    margin: 100%;
    margin-top: 64px;
    margin-left: 18%; 
    margin-right: 20%;
 }
 
</style>