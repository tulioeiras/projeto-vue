import Home from './components/home/Home.vue';
import Cadastro from './components/Cadastro/Cadastro.vue';

export const routes = [
    {path: '', component: Home, titulo: 'Home'},
    {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}
]