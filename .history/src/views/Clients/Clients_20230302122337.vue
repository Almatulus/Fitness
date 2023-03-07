
<template>
    <div class="clients">
        <div class="clients__inner">
            <h2 class="mt-5 ml-5">Клиенты</h2>
            <br>
            <br>
            <div class="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
            </div>
            <v-table>
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                           
                        </th>
                        <th class="text-left">
                           ФИО
                        </th>

                        <th class="text-left">
                           Телефон
                        </th>

                        <th class="text-left">
                            Абонемент
                        </th>
                    
                        <th class="text-left">
                            Дата завершения
                        </th>
                        <th class="text-left">
                           Дата последнего посещения 
                        </th>
                        
                    </tr>
                </thead>
               
                </template>
            </v-table>
        </div>
    </div>
</template>
<style lang="scss" scoped>
 .clients{
    width: 100%;
    margin-top: 64px;
    margin-left: 19%; 
 }
 
</style>