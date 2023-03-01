<template>
    <div class="clients">
        <div class="clients__inner">
            <h2 class="mt-5 ml-5">Клиенты</h2>
            <br>
            <v-card-text>
                <v-text-field
                class="search"
                    :loading="loading"
                    density="compact"
                    variant="solo"
                  
                    label="Поиск"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    @click:append-inner="onClick"
                ></v-text-field>
            </v-card-text>
        </div>
    </div>
</template>