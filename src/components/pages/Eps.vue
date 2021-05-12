<template>
<div id="episodios-container">
    <div id="episodios">
        <epscard/>
        <epscard/>
        <epscard/>
        <epscard/>
        <epscard/>
        <epscard/>
        <epscard/>
        <epscard/>
        <epscard/>
    </div>
    <button id="load">Carregar mais Episódios</button>
</div>
</template>

<script>
import epscard from '../epscard'
export default {
  components: {
    epscard
  }
}
</script>

<style>
    #episodios{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 55px;
        row-gap: 35px;
        margin: 0 3%;
    }
    #episodios-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #load{
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
    #load:hover{
        background: var(--color-);
        color: var(--main-bg);
    }
    @media (max-width: 1200px){
        #episodios{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 992px){
        #episodios{
            grid-template-columns: 1fr;
        }
    }
</style>
