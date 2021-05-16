<template>
<div id="loja">
  <section id="lancamentos" class="prod">
    <div>
        <h1>Camisas</h1>
    </div>
    <Cards/>
  </section>
</div>
</template>

<script>
import Cards from '../Cards'
export default {
  components: {
    Cards
  }
}
</script>

<style>
    #loja{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px 100px;
        min-height: calc(100vh - 225px);
    }
    .prod{
        text-transform: uppercase;
        color: white;
        letter-spacing: 6px;
        font-size: 1.9rem;
    }
    .prod div h1,h2{
        text-align: center;
    }
</style>
