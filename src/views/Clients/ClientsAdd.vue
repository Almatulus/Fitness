<template>
    <div class="client-add">
        <v-container>
            <div class="client-add__inner">
                <v-row>
                    <h3>Добавить клинета</h3>
                </v-row>
                <v-form>
                    <v-row>
                        <v-col cols="4">
                            <v-file-input
                                class="mt-9"
                                label="Вставить фото"
                                variant="solo"
                                prepend-icon="mdi-camera"
                                
                            ></v-file-input>
                        </v-col>
                        <v-col class="mt-3" cols="8">
                            <v-row>
                                <p class="form-col-title">Личные данные</p>
                            </v-row>
                            <v-row class="d-flex align-center">
                                <v-col cols="6">
                                    <v-text-field
                                    label="Фамилия"
                                    variant="solo"
                                    ></v-text-field>

                                    <v-text-field
                                    label="Имя"
                                    variant="solo"></v-text-field>

                                    <input type="datetime-local" id="meeting-time"
                                    name="meeting-time" value="2018-06-12T19:30"
                                    min="2018-06-07T00:00" max="2018-06-14T00:00">
                                </v-col>
                                <v-col cols="6">
                                    <v-select
                                    label="Пол"
                                    :items="genderList"
                                    variant="solo"
                                    ></v-select>

                                    <v-text-field
                                    label="Email"
                                    variant="solo"></v-text-field>

                                    <v-text-field
                                    label="Телефон"
                                    variant="solo"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <div class="">
                                <p class="form-col-title">Номер карты</p>
                                <v-text-field
                                class="mt-2"
                                label="Номер карты"
                                placeholder="4000 0012 3456 7899"
                                variant="solo"></v-text-field>
                            </div>
                            <div class="">
                                <p class="form-col-title">Имя на карте</p>
                                <v-text-field
                                class="mt-2"
                                label="Имя на карте"
                                placeholder="Серикбай Абзал"
                                variant="solo"></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="">
                                <p class="form-col-title">Истекающий срок</p>
                                <v-text-field
                                class="mt-2"
                                label="Истекающий срок"
                                placeholder="2023/03"
                                variant="solo"></v-text-field>
                            </div>
                            <div class="">
                                <p class="form-col-title">Код безопасности</p>
                                <v-text-field
                                class="mt-2"
                                label="Код безопасности"
                                placeholder="4312"
                                variant="solo"></v-text-field>
                            </div>
                        </v-col>
                        <div style="width: 100%" class="d-flex justify-end">
                            <v-btn
                            type="submit"
                            color="primary"
                            class="mt-4"
                            :loading="loader"
                            :disabled="loader"
                            >
                                Войти
                            </v-btn>
                        </div>
                    </v-row>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        genderList: ['Мужской', 'Женский'],
        form:{
            secondName: '',
            name: '',
            birthDate: '',
            gender: '',
            email: '',
            phone: ''
        },
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        })
    }
</script>

<style lang="scss" scoped>
.client-add {
	&__inner {

	}
}

</style>