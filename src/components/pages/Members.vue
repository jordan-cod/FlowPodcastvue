<template>
    <div id="membros" class="middle">
        <div class="middle">
            <h1>Seja um flower diferenciado, torne-se membro!</h1>
            <p>Ser um MEMBRO é a melhor maneira de você, fã do Flow Podcast, nos ajudar a manter nossa liberdade.</p>
            <p>Ao nos desvincularmos de plataformas de apoio de terceiros conseguimos ter controle sobre tudo e pensarmos cada vez mais em coisas exclusivas pra você, Flower que além da sua visualização quer nos dar um suporte financeiro pra que possamos seguir assim, falando muita merda, do jeitinho que você gosta.</p>
            <p>Para se tornar um MEMBRO você precisará escolher entre duas opções de plano que possuem diferenças de preço e vantagens. Clique na opção escolhida para visualizar a descrição de cada plano e dar continuidade ao seu processo de assinatura.</p>
        </div>
        <div id="choose">
            <div class="choose-1 flower-div">
                <h2>Membro flower humilde</h2>
                <img src="../../assets/membros/flower_humilde.png" class="flower">
            </div>
            <div class="choose-2 flower-div">
                <h2>Membro flower burguês</h2>
                <img src="../../assets/membros/flower_burgues.png" class="flower">
            </div>
        </div>
        <div id="vantagens">
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toggle () {
      document.getElementById()
    }
  }
}
</script>

<style>
    .middle{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #choose{
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    .flower-div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 35px;
        width: 270px;
        height: 270px;
        border: 1px solid rgb(39, 39, 39);
        border-radius: 10px;
        -webkit-box-shadow: 1px 1px 13px 6px #000000;
        box-shadow: 1px 1px 13px 6px #000000;
        padding: 20px;
        cursor: pointer;
   }
   .flower-div:hover{
       border: 1px solid white;
       padding-top: 25px;
   }
   .flower-div > h2{
       color: white;
       font-size: 1.3rem;
       text-transform: uppercase;
   }
    .flower{
        width: 120px;
        max-width: 100%;
    }
</style>
