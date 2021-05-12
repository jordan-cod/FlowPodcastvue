<template>
<div id="concursos-container">
    <div id="concursos">
        <contestscard/>
        <contestscard/>
        <contestscard/>
        <contestscard/>
        <contestscard/>
        <contestscard/>
    </div>
    <button id="carregarmais">Carregar mais concursos</button>
</div>
</template>

<script>
import contestscard from '../contestscard.vue'
export default {
  components: {
    contestscard
  }
}
</script>

<style>
    #concursos-container{
       display: flex;
       flex-direction: column;
       align-items: center;
    }
    #concursos{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0 3%;
        gap: 25px;
    }
    #carregarmais{
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid var(--color-hover);
        background: transparent;
        color: var(--color-);
        text-transform: uppercase;
        font-weight: 500;
        margin: 30px 0px;
        cursor: pointer;
        transition-property: background color;
        transition: .2s linear;
    }
    #carregarmais:hover{
        background: var(--color-);
        color: var(--main-bg);
    }
    @media (max-width: 1200px){
        #concursos{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 992px){
        #concursos{
            grid-template-columns: 1fr;
        }
    }
</style>
