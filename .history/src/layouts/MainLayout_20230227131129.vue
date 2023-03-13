<template>
  <div class="app_main-layout">
    <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">12.12.12</span>
        </div>
        <ul class="right hide-on-small-and-down">
          <li>
            <a class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"> User Name 
          <i class="material-icons right">arrow_drop_down</i> </a>
          <ul id='dropdown' class='dropdown-content'>
            <li>
              <a href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li> <a href="#" class="black-text"><i class="material-icons">assignment_return</i>Выйти
             </a> 
            </li>
          </ul>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav app-sidenav open">
      <li> <a href="#" class="waves-effect waves-orange pointer">Счет</a></li>
    
    <li> <a href="#" class="waves-effect waves-orange pointer">История</a></li>
    <li> <a href="#" class="waves-effect waves-orange pointer">Планирование</a></li>
    <li> <a href="#" class="waves-effect waves-orange pointer">Новая запись</a></li>
    <li> <a href="#" class="waves-effect waves-orange pointer">Категории</a></li>
  </ul>
  <main class="app-content">
    <div class="app-page">
      <div>
        <div class="page-title">
          <h3>Категории</h3>
        </div>
        <section>
          <div class="row">
            <div class="col s12 m6">
              <div><div class="page-subtitle"><h4>Create</h4></div>
            <form>
              <div class="input=field"></div>
            </form>
            </div>
            </div>
            </div>
        </section>
      </div>
    </div>
  </main>
  </div>
</template>


<script>
import axios from 'axios'
import { BASE_URL } from '../helpers/const'
export default {
    data: () => ({
        username: '',
        role: '',
        drawer: false,
        group: null,
    }),
    methods:{
        logout(){
            axios.post(`/auth/token/logout/`,
            {
            },
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            }).then(() => {
                this.$router.push('/login')
                localStorage.clear()
            })
        },
        getUserName(){
            axios.get(`${BASE_URL}/auth/users/`,
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            }).then((response) => {
               
                this.username = response.data[0].username,
                localStorage.setItem('user_id', response.data[0].id)
                this.getUserRole()
            })
        },
        mounted(){
        this.getUserName()
    },
    watch: {
      group () {
        this.drawer = false
      },
    }
    }}
</script>