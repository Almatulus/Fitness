
import { getData } from 'ajv/dist/compile/validate';

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
            </v-simple-table>
        </div>
    </div>
</template>