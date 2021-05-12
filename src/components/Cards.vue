<template>
<div id="cards">
  <div class="produtos">
    <div class="produto-border produto">
      <a href="./loja-produtos/mic-basica.html">
        <div class="card-prod produto-1-img">
            <img src="../assets/Loja/produto-1/camisa1.jpeg">
        </div>
        <div class="descricao-produto">
            <p class="prodname">{{nome}}</p>
            <p class="prodpreco">R$ {{preco}}</p>
        </div>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: 'Mic Básica',
          preco: 'R$ 89.90',
          src: require('../assets/Loja/produto-1/camisa1.jpeg')
        },
        {
          name: 'Flow Core',
          preco: 'R$ 89.90',
          src: require('../assets/Loja/produto-2/camisa2.jpeg')
        },
        {
          name: 'Flow Logo',
          preco: 'R$ 89.90',
          src: require('../assets/Loja/produto-3/camisa3.jpeg')
        },
        {
          name: 'Monark Head',
          preco: 'R$ 89.90',
          src: require('../assets/Loja/produto-4/camisa4.jpeg')
        },
        {
          name: 'Flow Patch',
          preco: 'R$ 89.90',
          src: require('../assets/Loja/produto-5/camisa5.jpeg')
        }
      ]
    }
  }
}
</script>

<style >
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
</style>
