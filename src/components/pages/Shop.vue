<template>
<div id="loja">
  <section id="lancamentos" class="prod">
    <div>
        <h1>Lançamentos</h1>
    </div>
    <div class="cards-container">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
  </section>
  <section id="camisetas" class="prod">
    <div>
        <h2>Camisetas</h2>
    </div>
    <div class="cards-container">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
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
    .cards-container{
        margin-top: 30px;
        margin-bottom: 70px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 25px;
    }
</style>
