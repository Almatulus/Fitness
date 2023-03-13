
    <template>
    <div class="reports">
        <div class="reports__inner">
            <h2 class="mt-5 ml-5">Отчеты</h2>
            <br>
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
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
                        
                    </tr>
                </thead>
                <tbody>
            
                </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>
<style lang="scss" scoped>
 .reports{
    // height:3460px;
    // width: 1560px;
    width: 100%;
    margin: 100%;
    margin-top: 64px;
    margin-left: 16.5%; 
    margin-right: 20%;
 }
 </style>