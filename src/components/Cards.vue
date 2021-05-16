<template>
<div>
  <button class="adicionarprod" @click="addProduct()">Adicionar</button>
  <div id="cards">
    <div class="produtos" v-for="produto in produtos" :key='produto.id'>
    <div class="produto-border produto">
      <a>
        <div class="card-prod produto-1-img">
            <img :src="produto.img">
        </div>
        <div class="descricao-produto">
            <p class="prodname">{{produto.name}}</p>
            <p class="prodpreco">R$ {{produto.preco}}</p>
        </div>
      </a>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      produtos: [
      ]
    }
  },
  methods: {
    addProduct (id, name, img, preco) {
      var product = {}
      product = {
        id: 2 + 1,
        name: 'Flow Core',
        img: 'https://storage.googleapis.com/flowpodcast.appspot.com/camisetas/01-G8DT87Eq.jpeg',
        preco: 89.00
      }
      this.produtos.push(product)
      console.log('foi')
    }
  },
  props: {
    id: Number,
    name: String,
    img: String,
    preco: Number
  }
}
</script>

<style>
    #cards{
      margin-top: 30px;
      margin-bottom: 70px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 25px;
    }
    .card-prod img{
        max-width: 100%;
    }
    .descricao-produto{
        padding: 12px 0px;
    }
    .descricao-produto p{
        text-align: center;
        color: #F0F0F0;
    }
    .prodname{
        font-size: 1.2rem;
        font-weight: 500;
    }
    .prodpreco{
        font-size: 2rem;
        font-weight: 700;
    }
    .produto-border{
        border: 1px solid var(--color-) ;
    }
    .adicionarprod{
      position: absolute;
      right: 45px;
      top: 115px;
      background: var(--color-);
      border: 1px solid transparent;
      font-size: 1.1rem;
      text-transform: uppercase;
      padding: 6px 10px;
      cursor: pointer;
      transition-property: background color;
      transition: .2s linear;
    }
    .adicionarprod:hover{
      background: transparent;
      border: 1px solid var(--color-);
      color: var(--color-);
    }
    @media (max-width: 1200px){
        /*Mudando a grid pra 2 colunas*/
        #cards{
            grid-template-columns: 1fr 1fr;
        }
    }
     @media (max-width: 992px){
        /*Mudando a grid de videos pra 1 colunas*/
        #cards{
            grid-template-columns: 1fr;
        }
    }
</style>
