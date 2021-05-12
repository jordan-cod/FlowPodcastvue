<template>
    <div id="cardDeEp">
        <div id="cardheader">
            <img src="../assets/home/cards/exemplo.jpg">
        </div>
        <div id="cardmain">
            <h4>{{title}} - Flow Podcast #{{episodio}}</h4>
            <p>{{desc}}</p>
        </div>
        <div id="links">
            <a href="#" target="_blank" class="card-btn"><img src="../assets/home/socials/youtube_2.svg">Youtube</a>
            <a href="#" target="_blank" class="card-btn"><img src="../assets/home/socials/spotify_3.svg">Spotify</a>
            <button class="menusvg"><img src="../assets/home/socials/menu.svg">Outros</button>
        </div>
        <div id="cardfooter">
            <p>{{date}}</p>
            <a>Comentar >></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ep-card',
  data () {
    return {
      title: 'Nome do participante',
      desc: 'Descrição do participante',
      episodio: '1',
      date: 'mm/dd/yy'
    }
  }
}
</script>

<style>
    #cardDeEp{
        background: rgb(255, 255, 255);
        border-radius: 5px;
        color: black;
        max-width: 100%;
    }
    #cardheader{
        border-bottom: 1px solid rgb(214, 213, 213);
        border-radius: 5px;
    }
    #cardheader img{
        max-width: 100%;
    }
    #cardmain{
        margin: 5px 15px;
        text-align: left;
        min-height: 95px;
    }
    #cardmain > h4{
        margin: 15px 0 5px 0;
        font-weight: 700;
    }
    #links{
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        margin-bottom: 10px;
    }
    .card-btn > img{
        width: 25px;
        border-radius: 100%;
        margin-right: 5px;
    }
    .card-btn{
        font-weight: 500;
        color: black;
        padding: 5px;
        background: var(--color-);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background .2s linear;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .card-btn:hover{
        background: var(--color-hover);
    }
    #cardfooter{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 15px;
        border-top: 1px solid rgb(214, 213, 213);
    }
    #cardfooter > a{
        color: var(--color-hover);
        text-transform: uppercase;
        cursor: pointer;
    }
    .menusvg{
        font-weight: 500;
        color: black;
        padding: 5px;
        background: var(--color-);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background .2s linear;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .menusvg > img{
        margin-right: 10px;
        width: 25px;
    }
</style>
