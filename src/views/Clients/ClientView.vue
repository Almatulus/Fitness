<template>
    <div class="client">
        <v-container>
            <div class="client__inner">
                <v-row>
                    <v-col cols="2">
                        <router-link to="/clients">
                            <v-btn
                            color="primary"
                            prepend-icon="mdi-arrow-left-thick"
                            >
                                Назад
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="mr-4" cols="3">
                        <v-img
                        class="bg-white"
                        width="180"
                        :aspect-ratio="1"
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                        ></v-img>
                    </v-col>
                    <v-col>
                        <h2>
                            Ержигит Кайратов
                        </h2>
                        <p>
                            +7 747 321 5643
                        </p>
                        <p>
                            @example.ru
                        </p>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>