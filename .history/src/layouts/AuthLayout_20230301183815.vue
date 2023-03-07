<template>
    <v-layout class="layout">
        <div class="auth" >
            <v-container class="container">
                <div class="auth__inner  d-flex justify-center">
                    <v-col cols="6">
                        <v-card class="auth__card">
                            <router-view/>
                        </v-card>
                    </v-col>
                </div>
            </v-container>
        </div>
    </v-layout>
</template>


<style lang="scss" scoped>

.auth{
    background-image: url("second.jpg");
    width: 100%;
    &__inner{
        
    }
    &__card{
        padding: 30px;
    }
}
.container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.layout{
    background-image: url("first.jpg");
    min-height: 100vh;
   
    
}
</style>