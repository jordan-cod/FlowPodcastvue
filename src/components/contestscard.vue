<template>
    <div id="concursos-card">
        <div id="concursosheader">
            <img src="../assets/concursos/exemplo.jpg">
        </div>
        <div id="concursosmain">
            <h4>{{title}}</h4>
            <p>{{desc}}</p>
        </div>
        <div id="concursosfooter">
            <div>
                <p>Aberto em: {{dataInic}} às {{horaInic}}</p>
                <p>Termina em: {{dataFim}} às {{horaFim}}</p>
            </div>
            <a id="participar">Participar</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'card concursos',
  data () {
    return {
      title: 'Título do item',
      desc: 'Descrição do item aqui',
      horaInic: 'hh:mm',
      dataInic: 'mm/dd/yyy',
      dataFim: 'mm/dd/yyy',
      horaFim: 'hh:mm'
    }
  }
}
</script>

<style scoped>
    #concursos-card{
        background: white;
        border-radius: 5px;
    }
    #concursosheader{
        border-bottom: 1px solid rgb(238, 238, 238);
        padding: 5px 5px 0px 5px;
    }
    #concursosheader > img{
        max-width: 100%;
    }
    #concursosmain{
        margin: 10px 0 15px 0;
        padding: 0 15px;
    }
    #concursosfooter{
        background: rgb(238, 238, 238);
        padding: 15px;
        min-height: 50px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 0 0 5px 5px;
        border-top: 1px solid rgb(204, 204, 204);
    }
    #concursosfooter > div{
        display: flex;
        flex-direction: column;
    }
    #participar{
        font-weight: 500;
        letter-spacing: 1px;
        background: var(--color-);
        padding: 15px 35px;
        border-radius: 5px;
        cursor: pointer;
        transition: background .2s linear;
    }
    #participar:hover{
        background: var(--color-hover);
    }
</style>
