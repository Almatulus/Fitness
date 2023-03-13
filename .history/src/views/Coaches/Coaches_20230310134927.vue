<template>
    <div class="coaches">
        <v-container>
            <div class="coaches__inner">
              <v-row> Редактирование клиента</v-row>
              <v-form>
                <v-row>
                    <v-col cols="4">
                        <v-file-input class="mt-9"
                        label="Изменить фото"
                        variant="solo"
                        prepend-icon="mdi-camera"
                        accept="image/png, image/gif, image/jpeg"
                        id="file"
                        ref="file"
                        v-on:change="handleFileUpload"></v-file-input>
                    </v-col>
                    <v-col class ></v-col>
                    <v-row>
                        <p class="form-col-title">Личные данные</p>
                    </v-row>
                    <v-row class="d-flex" >
                        <v-col cols="6">
                            <v-text-field
                            label="Логин"
                            variant="solo"
                            clearable
                            v-model="form.usernametr"
                            :error-messages="v$.form.usernametr.$errors.map(e => e.$message)"></v-text-field>

                            <v-text-field 
                            label="Фамилия"
                            variant="solo"
                            clearable
                            v-model="form.secondNametr"
                            :error-messages="v$.form.secondNametr.$errors.map(e => e.$message)"></v-text-field>

                            <v-text-field 
                            label="Имя"
                            variant="solo"
                            clearable
                            v-model="form.nametr"
                            :error-messages="v$.form.nametr.$errors.map(e => e.$message)"></v-text-field>

                            <v-text-field 
                            label="Специальность"
                            variant="solo"
                            clearable
                            v-model="form.profession"
                            :error-messages="v$.form.profession.$errors.map(e => e.$message)"></v-text-field>
                            </v-col>

                            <v-col cols="6">

                            <v-text-field
                            label="Телефон"
                            variant="solo"
                            clearable
                            v-model="form.phonetr"
                            v-maska data-maska="#-#"
                            :error-messages="v$.form.phonetr.$errors.map(e => e.$message)"  ></v-text-field>

                            <v-text-field
                            label="Стаж"
                            variant="solo"
                            clearable
                            v-model="form.year"
                            :error-messages="v$.form.year.$errors.map(e => e.$message)"  ></v-text-field>

                            <v-text-field
                            label="Прайс"
                            variant="solo"
                            clearable
                            v-model="form.price"
                            :error-messages="v$.form.price.$errors.map(e => e.$message)"  ></v-text-field>

                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="О тренере"
                            variant="solo"
                            clearable
                            v-model="form.year"  ></v-text-field>
                        </v-col>
                        </v-row>
                </v-row>
              </v-form>
            </div>
        </v-container>
    </div>
</template>