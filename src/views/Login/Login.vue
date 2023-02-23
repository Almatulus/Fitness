<template>
    <div class="login">
        <h2>Авторизация</h2>
        <v-form @submit.prevent="SubmitHandler()">
            <v-text-field
                label="Логин"
                placeholder="Almatulus"
                variant="outlined"
                clearable
                hint="Введите правильный логин для входа"
                class="mt-10 "
                
            ></v-text-field>
            <v-text-field
                label="Пароль"
                placeholder="Пароль"
                variant="outlined"
                clearable
                hint="Введите правильный пароль для входа"
                class="mt-4"
            ></v-text-field>
            <div class="d-flex justify-end">
                <v-btn
                type="submit"
                color="primary"
                class="mt-4"
                >
                    Войти
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


</style>