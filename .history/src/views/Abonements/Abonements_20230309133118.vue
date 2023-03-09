<template>
    <div class="abonements">
       <div class="abonements__inner">
             
        <v-col cols="11">
                        <v-text-field
                        :loading="loading"
                        density="default"
                        variant="solo"
                        label="Поиск клиентов"
                        append-inner-icon="mdi-magnify"
                        single-line
                        hide-details
                        
                        ></v-text-field>
                        <!-- @click:append-inner="onClick" -->
                    </v-col>
      <br>
      <br>
    
      <v-row class="mergle">
        <v-col class="d-flex
        justify-space-evenly"   >
        
          <v-card 
          v-click-outside="onClickOutside"
          :color="active ? 'primary' : undefined"
          :dark="active"
          height="356"
          rounded="xl"
          width="270"
          @click="active = true"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                {{ active ? 'Click Outside' :g }}
                <v-card-title class="text-h4" style="font-weight: bold;">
                  Basic
                </v-card-title>
                <v-card-subtitle>Подписка с ежемесячной платой</v-card-subtitle>
                <br>
                 <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Мобильное приложение </v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Расторжение в любой момент</v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>2 гостевых визита в подарок </v-card-subtitle>
                <br>
                <br>
                <br>
                <br>
                <br>
                <v-divider class="test"  inset></v-divider>
                <br>
                <v-card-title >14999 тг</v-card-title>

              </div>
            </div>
          </v-card>
        </v-col>

        <v-col class="d-flex 
        justify-space-evenly" >
        
          <v-card 
          v-click-outside="onClickOutside"
          :color="active ? 'primary' : undefined"
          :dark="active"
          height="356"
          rounded="xl"
          width="270"
          @click="active = true"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5" style="font-weight: bold;">
                  Unlimite
                </v-card-title>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Мобильное приложение </v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Расторжение в любой момент</v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>2 гостевых визита в подарок </v-card-subtitle>
                <br>
                <br>
                <br>
                <br>
                <br>
                <v-divider class="border-opacity-25" inset></v-divider>
                <br>
                <h4>14999 тг</h4>
              </div>
            </div>
          </v-card>
        </v-col>
   
       

        <v-col class="d-flex 
        justify-space-evenly" >
        
          <v-card 
          v-click-outside="{
           handler: onClickOutside,
            include
         }"         
          :color="active ? '#6E64E7' : undefined"
          :dark="active"
          height="356"
          rounded="xl"
          width="270"
          @click="active = true"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5" style="font-weight: bold;">
                  Basic
                </v-card-title>

                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Мобильное приложение </v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Расторжение в любой момент</v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>2 гостевых визита в подарок </v-card-subtitle>
                <br>
                <br>
                <br>
                <br>
                <br>
                <v-divider class="border-opacity-25" inset></v-divider>
                <br>
                <h4>14999 тг</h4>
              </div>
            </div>
          </v-card>
        </v-col>
   
        <v-col class="d-flex 
        justify-space-evenly" >
        
          <v-card 
          v-click-outside="{
           handler: onClickOutside,
           include
            }"
          :color="active ? '#6E64E7' : undefined"
          :dark="active"
          height="356"
          rounded="xl"
          width="270"
          class="mx-auto"
          @click="active = true"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5" style="font-weight: bold;">
                  Unlimite
                </v-card-title>

                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Мобильное приложение </v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>Расторжение в любой момент</v-card-subtitle>
                <br>
                <v-card-subtitle > <v-icon icon="mdi-check"> </v-icon>2 гостевых визита в подарок </v-card-subtitle>
                <br>
                <br>
                <br>
                <br>
                <br>
                <v-divider class="border-opacity-25" inset></v-divider>
                <br>
                <h4>14999 тг</h4>
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
      active: false,
    }),
    methods: {
      // onClick () {
      //   this.loading = true
        onClickOutside () {
        this.active = false
       
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
    margin-left: 1.5%; 
    margin-right: 50px;
 }
 .card{
    height: 380px;
    width: 280px;
    border-radius: 20px;
 }
 .mergle{
    margin-left: -10px;
 }
 .test{
  border-width: 10px !important;
      
 }
 </style>