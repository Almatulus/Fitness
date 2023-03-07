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
                <v-row class="d-flex align-center">
                    <v-col class="mr-4" cols="3">
                        <v-img
                        class="bg-white"
                        width="180"
                        :aspect-ratio="1"
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                        ></v-img>
                    </v-col>
                    <v-col>
                        <h3>
                            Ержигит Кайратов
                        </h3>
                        <p class="mt-4">
                            +7 747 321 5643
                        </p>
                        <p class="mt-3">
                            @example.ru
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <p>Абонемент</p>
                        <v-card>
                            <h4>Unlimite</h4>
                            <p>Подписка с трехмесячной платой</p>
                            <v-list lines="one">
                            <v-list-item
                                v-for="item in items"
                                :key="item.title"
                                :title="item.title"
                                subtitle="..."
                            ></v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>