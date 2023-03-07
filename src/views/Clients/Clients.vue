<template>
    <div class="clients">
      <v-overlay
        :model-value="loader"
        class="align-center justify-center"
      >
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
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
                        
                        ></v-text-field>
                        <!-- @click:append-inner="onClick" -->
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
                                <!-- <th class="text-center table-head-bottom-border">
                                    Дата завершения
                                </th> -->
                                <th class="text-center table-head-bottom-border">
                                    Дата последнего посещения
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="item in clientList"
                                :key="item.id"
                            >
                                <td>
                                  <v-avatar color="surface-variant">
                                    <v-img
                                      :src="item.image"
                                      alt="user"
                                    ></v-img>
                                  </v-avatar>
                                </td>
                                <td>
                                  <a href="">
                                    <router-link :to="{name: 'clients/client/id', params: {id: item.id}}">
                                      {{item.user}}
                                    </router-link>
                                  </a>
                                </td>
                                <td>{{item.phone}}</td>
                                <td>{{item.subscription}}</td>
                                <td>{{}}</td>
                                <td>{{item.last_attendance}}</td>
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
import axios from 'axios'
import { BASE_URL } from '../../helpers/instance'
  export default {
    data: () => ({
      loader: true,
      clientList: []
    }),
    methods:{
      async getClientsList(){
        this.loader = true
        axios.get(`${BASE_URL}/api/clients/list/`,
        {
          headers:{
            Authorization: 'Token ' + sessionStorage.getItem('usertoken')
          }
        })
        .then((response)=>{
          console.log(response.data)
          this.clientList = response.data
          this.loader = false
        })
      }
    },
    mounted(){
      this.getClientsList()
    }
  }
</script>

<style lang="scss" scoped>
.clients{
    padding: 20px 0;
}

.v-field{
    border-radius: 30px!important;
    padding: 0 30px;
}
</style>