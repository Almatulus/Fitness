<template>
    <div class="clients">
        <div class="clients__inner">
            <h2 class="mt-5 ml-5">Клиенты</h2>
            <br>
            <!-- <v-simple-table>
                <template v-slot:default>
                <thead> -->
                    <!-- <tr>
                        <th class="text-left">
                            №
                        </th>
                        <th class="text-left">
                            Тип
                        </th>
                        <th class="text-left">
                            Организация
                        </th>
                        <th class="text-left">
                            Логин
                        </th>

                        <th class="text-left">
                           ФИО
                        </th>

                        <th class="text-left">
                            Контакты
                        </th>
                    
                        <th class="text-left">
                            Статус
                        </th>
                        <th class="text-left">
                           Активация 
                        </th>
                        
                    </tr> -->
                <!-- </thead> -->
                <!-- <tbody>
                    <tr
                    v-for="(organization, index) in organizationList"
                    :key="organization.id"
                    >
                        <td>{{ index + 1 }}</td>
                        <td>{{ organization.org_type }}</td>
                        <td>{{ organization.org_name }}</td>
                        <td>{{ organization.username }}</td>
                        <td>{{ organization.full_name }}</td>
                        <td>{{ organization.phone }}</td>
                        
                        <td>
                            <p class="a" v-if="organization.is_active == true">Активен</p>
                            <p class="d" v-if="organization.is_active == false">Неактивен</p>
                        </td>
                        <td>
                            <v-btn class="aa"  @click.prevent="changeUserStatus(organization.id)" v-if="organization.is_active == false">
                                Активировать
                            </v-btn>
                            <v-btn class="dd"   @click.prevent="changeUserStatus(organization.id)" v-if="organization.is_active == true">
                                Деактивировать
                            </v-btn>
                        </td>
                    </tr>
                </tbody> -->
                <!-- </template>
            </v-simple-table> -->
        </div>
    </div>
</template>