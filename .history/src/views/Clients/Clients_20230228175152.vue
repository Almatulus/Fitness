<template>
    <div class="clients">
        <div class="clients__inner">
            <h2 class="mt-5 ml-5">Клиенты</h2>
            <br>
            <br>
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                           ФИО
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
                        
                    </tr>
                </thead>
               
                </template>
            </v-simple-table>
        </div>
    </div>
</template>