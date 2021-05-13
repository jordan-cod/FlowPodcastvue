<template>
    <header id="header">
      <div id="menu-container">
        <div id="logo">
          <router-link  to="/"><img src="../assets/header/logo.png"></router-link>
        </div>
        <nav id="web">
          <ul>
            <li><router-link to="/" class="link-web">Home</router-link></li>
            <li><router-link to="/loja" class="link-web">Loja</router-link></li>
            <li><router-link to="/episodios" class="link-web">Episódios</router-link></li>
            <li><router-link to="/concursos" class="link-web">Concursos</router-link></li>
            <li><router-link to="/membros" class="link-web">Membros</router-link></li>
          </ul>
        </nav>
      </div>
      <div id="userContainer">
          <button id="userBtn"><router-link to="/flowcoins" id="btn">FlowCoins</router-link></button>
          <img src="../assets/header/user.png" id="login">
      </div>
      <button id="newmenu" @click.stop.prevent="toggle()"><img src="../assets/header/HeaderMenu.svg" id="HeaderMenu"></button>
      <div id="header-mobile" v-if="isOpen">
        <ul>
            <li @click="toggle()"><router-link to="/" class="link-mobile">Home</router-link></li>
            <li @click="toggle()"><router-link to="/loja" class="link-mobile">Loja</router-link></li>
            <li @click="toggle()"><router-link to="/episodios" class="link-mobile">Episódios</router-link></li>
            <li @click="toggle()"><router-link to="/concursos" class="link-mobile">Concursos</router-link></li>
            <li @click="toggle()"><router-link to="/membros" class="link-mobile">Membros</router-link></li>
            <li @click="toggle()"><a class="link-mobile  login">Login/Cadastro</a></li>
        </ul>
    </div>
    </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },
  components: {
  }
}
</script>

<style scoped>
#header{
    width: 100%;
    height: 98px;
    background: var(--header-bg);

    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0px 20px;
  }
  #menu-container{
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
   #menu-container > nav {
     display: flex;
     align-items: center;
   }
  #menu-container > nav > ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
  }
  #menu-container a{
    color: var(--font-color-menu);
    padding: 18px 25px;
    transition: color .2s linear;
  }
  #menu-container a:hover{
    color: var(--color-hover);
  }
  #logo img{
    width: 140px;
    height: 78px;
  }
  #userContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  #userBtn{
    height: 15px 10px;
    background-color: transparent;
    border: none;
  }
  #userBtn a{
    color: var(--font-color-menu);
    text-transform: uppercase;
    transition: color .2s linear;

  }
  #userBtn a:hover{
    color: var(--color-hover);
  }
  #login{
    background-color: white;
    width: 36px;
    border-radius: 50%;

    cursor: pointer;
  }
  #btn{
    padding: 15px 10px;
    border: 1px solid var(--color-);
    border-radius: 2px;
  }
  #HeaderMenu{
    width: 35px;
    margin-right: 15px;
    cursor:pointer;
  }
  #newmenu{
    display: none;
    background: transparent;
    border: none;
  }
  #header-mobile{
    position: absolute;
    top: 98px;
    left: 0;
    width: 100%;
    background: var(--color-);
    height: 475px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, -2px 50px 0px -1px rgba(0,0,0,0);
    box-shadow: 0px 10px 13px -7px #000000, -2px 50px 0px -1px rgba(0,0,0,0);
  }
  #header-mobile > ul, #header-mobile ul > li{
    width: 100%;
    text-align: center;
    height: auto;
  }
  .link-mobile{
    display: block;
    padding: 30px;
    text-transform: uppercase;
  }
  .link-mobile:hover{
    background: var(--color-hover);
  }
  .login{
    font-size: 1rem;
  }
  @media (max-width: 1000px){
    #header{
      padding: 0px 20px 0px 0px;
    }
    #menu-container > nav {
      display: none;
    }
    #userContainer{
      display: none;
    }
    #newmenu{
    display: block;
  }
}
</style>
