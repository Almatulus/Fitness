<template>
    <div class="coaches">
        <v-container>
            <div class="coaches__inner">
                <v-row>
                    <v-col cols="6">
                        <v-text-field></v-text-field>
                        <v-list lines="one">
                            <v-list-item
                                v-for="item in items"
                                :key="item.title"
                                :title="item.title"
                                subtitle="..."
                            ></v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="6">

                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>