<template>
    <div class="abonements">
       <div class="abonements__inner">
             
        <v-col
            class="text"
            cols="2"
            
            md="9" >
      <v-text-field
        
        variant="outlined"
        label="Поиск абонемента"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      </v-col>
      <br>
      <br>
    
      <v-row no-gutters>
        <v-col class="d-flex justify-center
        justify-space-evenly" cols="4" 
        >
            
          <v-card class="card"
            color="grey"
            theme="grey"
          >
            <v-card-title class="text-h5">
             Basic
            </v-card-title>

            <v-card-subtitle>Подписка с ежемесячной платой </v-card-subtitle>
            <br>
            <v-card-subtitle>Подписка с ежемесячной платой </v-card-subtitle>
            <br>
            <v-card-subtitle>Подписка с ежемесячной платой </v-card-subtitle>
            <v-card-actions>
              
            </v-card-actions>
          </v-card>
       
        </v-col>

        <v-col class="d-flex justify-center
        justify-space-evenly" cols="2" 
        >
            
          <v-card class="card"
            color="grey"
            theme="grey"
          >
            <v-card-title class="text-h5">
             Basic
            </v-card-title>

            <v-card-subtitle>Подписка с ежемесячной платой </v-card-subtitle>
            <br>
            <v-card-subtitle>Подписка с ежемесячной платой </v-card-subtitle>
            <br>
            <v-card-subtitle>Подписка с ежемесячной платой </v-card-subtitle>
            <v-card-actions>
              
            </v-card-actions>
          </v-card>
       
        </v-col>
   
       

        <v-col class="d-flex justify-center
        justify-space-evenly" cols="2"  >
        
          <v-card class="card"
          
            color="grey"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Unlimite
                </v-card-title>

                <v-card-subtitle>Подписка с ежемесячной платой</v-card-subtitle>

                <v-card-actions>
                 
                </v-card-actions>
              </div>
            </div>
          </v-card>
       
        </v-col>
   
        <v-col class="d-flex justify-center
        justify-space-evenly"
        cols="2">
        
          <v-card class="card"
            color="#952175"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Basic
                </v-card-title>

                <v-card-subtitle>Подписка с ежемесячной платой</v-card-subtitle>

                <v-card-actions>
                 
                </v-card-actions>
              </div>
            </div>
          </v-card>
        
        </v-col>
        
        
    </v-row>
   
  
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
 .card{
    height: 300px;
    width: 250px;
 }
 </style>