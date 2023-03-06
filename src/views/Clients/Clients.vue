<template>
    <div class="clients">
        <v-container>
            <div class="clients__inner">
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        :loading="loading"
                        density="default"
                        variant="solo"
                        label="Поиск клиентов"
                        append-inner-icon="mdi-magnify"
                        single-line
                        hide-details
                        @click:append-inner="onClick"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-table>
                            <thead>
                            <tr>
                                <th>

                                </th>
                                <th class="text-center table-head-bottom-border">
                                    ФИО
                                </th>
                                <th class="text-center table-head-bottom-border">
                                    Телефон
                                </th>
                                <th class="text-center table-head-bottom-border">
                                    Абонемент
                                </th>
                                <th class="text-center table-head-bottom-border">
                                    Дата завершения
                                </th>
                                <th class="text-center table-head-bottom-border">
                                    Дата последнего посещения
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="item in desserts"
                                :key="item.name"
                            >
                                <td>
                                  <v-avatar color="surface-variant"></v-avatar>
                                </td>
                                <td>
                                  <a href="">
                                    <router-link to="">
                                      Ержигит Кайратов
                                    </router-link>
                                  </a>
                                </td>
                                <td>87674335698</td>
                                <td>Optimal Feb</td>
                                <td>22/04/2022</td>
                                <td>22/04/2022</td>
                            </tr>
                            </tbody>
                        </v-table>
                    </v-col>
                </v-row>
                <!-- <v-row>
                    <v-col cols="12">
                        <v-data-table
                        v-model:page="page"
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="itemsPerPage"
                        hide-default-footer
                        class="elevation-1"
                        @update:options="options = $event"
                    >
                        <template v-slot:bottom>
                        <div class="text-center pt-2">
                            <v-pagination
                            v-model="page"
                            :length="options.pageCount"
                            ></v-pagination>
                            <v-text-field
                            :model-value="itemsPerPage"
                            class="pa-2"
                            label="Items per page"
                            type="number"
                            min="-1"
                            max="15"
                            hide-details
                            @update:model-value="itemsPerPage = parseInt($event, 10)"
                            ></v-text-field>
                        </div>
                        </template>
                    </v-data-table>
                    </v-col>
                </v-row> -->
                <p class="mt-7 text-right text-brand-color">
                  Найдено: 85 клинетов
                </p>
            </div>
        </v-container>
    </div>
</template>


<script>
  export default {
    data () {
      return {
        options: {
          pageCount: 1,
        },
        page: 1,
        itemsPerPage: 5,
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Dessert (100g serving)',
          },
          { title: 'Calories', key: 'calories' },
          { title: 'Fat (g)', key: 'fat' },
          { title: 'Carbs (g)', key: 'carbs' },
          { title: 'Protein (g)', key: 'protein' },
          { title: 'Iron (%)', key: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
.clients{
    padding: 20px 0;
}
</style>