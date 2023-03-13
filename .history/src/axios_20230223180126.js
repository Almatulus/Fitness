import axios from 'axios';

axios.defaults.baseURL = 'http://87.255.194.27:8000/';
axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('Token');