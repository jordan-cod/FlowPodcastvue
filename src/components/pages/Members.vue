<template>
    <div id="membros" class="middle">
        <div class="middle">
            <h1>Seja um flower diferenciado, torne-se membro!</h1>
            <p>Ser um MEMBRO é a melhor maneira de você, fã do Flow Podcast, nos ajudar a manter nossa liberdade.</p>
            <p>Ao nos desvincularmos de plataformas de apoio de terceiros conseguimos ter controle sobre tudo e pensarmos cada vez mais em coisas exclusivas pra você, Flower que além da sua visualização quer nos dar um suporte financeiro pra que possamos seguir assim, falando muita merda, do jeitinho que você gosta.</p>
            <p>Para se tornar um MEMBRO você precisará escolher entre duas opções de plano que possuem diferenças de preço e vantagens. Clique na opção escolhida para visualizar a descrição de cada plano e dar continuidade ao seu processo de assinatura.</p>
        </div>
        <div id="choose">
            <div class="choose-1 flower-div" @click="toggleflow('.choose-1'), BurguesOrHumilde ()">
                <h2>Membro flower humilde</h2>
                <img src="../../assets/membros/flower_humilde.png" class="flower">
            </div>
            <div class="choose-2 flower-div" @click="toggleflow('.choose-2'), humildeOrBurgues ()">
                <h2>Membro flower burguês</h2>
                <img src="../../assets/membros/flower_burgues.png" class="flower">
            </div>
        </div>
        <div class="vantagens vantagens-1" v-if="humildeIsOpen">
            <div class="mensalidade">
                <h2>Inscrição no plano MEMBRO FLOWER HUMILDE</h2>
                <p>Renovação mensal automática por <b>R$ 20,00</b></p>
            </div>
            <div class="sobre-vantagens">
                <h3>Vantagens de MEMBRO FLOWER HUMILDE</h3>
                <ul>
                    <li v-for="vantagen in vantagens" :key="vantagen.nome">{{vantagen.nome}}</li>
                </ul>
            </div>
            <button class="inscrever">Inscrever-se <b>R$ 20,00</b></button>
        </div>
        <div class="vantagens vantagens-2" v-if="burguesIsOpen">
            <div class="mensalidade">
                <h2>Inscrição no plano MEMBRO FLOWER BURGUÊS</h2>
                <p>Renovação mensal automática por <b>R$ 50,00</b></p>
            </div>
            <div class="sobre-vantagens">
                <h3>Vantagens de MEMBRO FLOWER BURGUÊS</h3>
                <ul>
                    <li v-for="burgues in burgueses" :key="burgues.nome">{{burgues.nome}}</li>
                </ul>
            </div>
            <button class="inscrever">Inscrever-se <b>R$ 50,00</b></button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      humildeIsOpen: true,
      burguesIsOpen: false,
      burgueses: [
        {
          nome: 'Faça parte do seleto grupo de MEMBROS do Flow Podcast.'
        },
        {
          nome: 'Desbloqueie um EMBLEMA exclusivo pra exibir no seu perfil e tirar mó onda.'
        },
        {
          nome: 'Tenha acesso a galeria de fotos exclusivas do Flow.'
        },
        {
          nome: 'Ganhe descontos progressivos em produtos da loja. '
        },
        {
          nome: 'Desconto no preço e prioridade máxima na compra de ingressos de futuros eventos que realizaremos.'
        },
        {
          nome: 'Receba adesivos brabíssimos e exclusivos a cada 3 meses.'
        },
        {
          nome: 'Tenha acesso ao mural da área de membros, onde serão postados planos/atualizações/spoilers exclusivos pros MEMBROS.'
        }
      ],
      vantagens: [
        {
          nome: 'Faça parte do seleto grupo de MEMBROS do Flow Podcast.'
        },
        {
          nome: 'Desbloqueie um EMBLEMA exclusivo pra exibir no seu perfil e tirar mó onda.'
        },
        {
          nome: 'Tenha acesso a galeria de fotos exclusivas do Flow.'
        },
        {
          nome: 'Ganhe descontos progressivos em produtos da loja. '
        },
        {
          nome: 'Desconto no preço e prioridade máxima na compra de ingressos de futuros eventos que realizaremos.'
        }
      ]
    }
  },
  methods: {
    toggleflow (elementoClicado) {
      document.querySelectorAll('.flower-div').forEach((el) => {
        el.classList.remove('choose-1-n')
      })
      document.querySelector(elementoClicado).classList.add('choose-1-n')
    },
    BurguesOrHumilde () {
      this.humildeIsOpen = true
      this.burguesIsOpen = false
    },
    humildeOrBurgues () {
      this.burguesIsOpen = true
      this.humildeIsOpen = false
    }
  }
}
</script>

<style>
    .middle{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        text-align: center;
        margin: 0 5% 25px 5%;
    }
    .middle > h1{
        font-size: 2.2rem;
        letter-spacing: 3px;
    }
    .middle > p{
        font-size: 1.3rem;
    }
    #choose{
        display: grid;
        grid-template-columns: 1fr 1fr;
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
    .choose-1-n{
        border: 1px solid white;
    }
    .vantagens{
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 100%;
    }
    .mensalidade{
        margin-top: 25px;
        padding: 10px;
        border-bottom: 1px solid white;
        margin-bottom: 10px;
    }
    .mensalidade > h2, .mensalidade > p{
        text-align: left;
    }
    .mensalidade > p{
        text-align: left;
    }
    .sobre-vantagens{
        border: 1px solid white;
        padding: 15px;
        min-height: 150px;
    }
    .sobre-vantagens > ul{
        list-style-type: disc;
        padding-left: 40px;
    }
    .inscrever{
        margin-top: 25px;
        border: none;
        padding: 10px;
        font-size: 1.1rem;
        font-weight: 600;
        background: var(--color-);
        border: 1px solid transparent;
        cursor: pointer;
    }
    .inscrever:hover{
        border: 1px solid var(--color-);
        background: transparent;
        color: var(--color-);
    }
    @media (max-width: 1000px) {
        #choose{
        display: grid;
        grid-template-columns: 1fr;
        gap: 50px;
        }
    }
</style>
