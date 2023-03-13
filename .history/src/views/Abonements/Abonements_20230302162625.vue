<template>
    <div class="abonements">
       <div class="abonements__inner">
             
        <v-col
            class="text"
            cols="3"
            
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
      
      <template >
      <v-row >
        <slot>
        <v-col cols="12" sm="4" >
            
          <v-card
            color="#385F73"
            theme="dark"
          >
            <v-card-title class="text-h5">
             Basic
            </v-card-title>

            <v-card-subtitle>Подписка с ежемесячной платой </v-card-subtitle>

            <v-card-actions>
              
            </v-card-actions>
          </v-card>
       
        </v-col>
       
        <v-col cols="12">
        
          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Unlimite
                </v-card-title>

                <v-card-subtitle>FПодписка с ежемесячной платой</v-card-subtitle>

                <v-card-actions>
                 
                </v-card-actions>
              </div>
            </div>
          </v-card>
       
        </v-col>

        <v-col cols="12">
        
          <v-card
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
        </slot>
      </v-row>
    </template>
  
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