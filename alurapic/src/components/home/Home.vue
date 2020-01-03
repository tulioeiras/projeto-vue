<template>
  <div>
    <h1 class="centralizado">AluraPic</h1>
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre pelo titulo da foto"/>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">
       <meu-painel :titulo="foto.titulo">
          <imagem :url="foto.url" :titulo="foto.titulo"/>
       </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import Imagem from '../shared/imagem-responsiva/ImagemResponsiva.vue';

export default {

  components:{
    'meu-painel': Painel, 'imagem':Imagem
  },
  data () {
    return {
      titulo: 'Alura Pic',
      fotos: [],
      filtro: ''
    }
  },

  computed:{
    fotosComFiltro(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }

  },

  created(){

    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));
    
  }
}
</script>

<style>
  .centralizado{
    text-align: center;
  }
  .lista-fotos{
    list-style: none;
  }
  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }
  
  .imagem-responsiva {
    width: 100%;
  }

  .filtro{
    display: block;
    width: 100%;
  }
</style>
