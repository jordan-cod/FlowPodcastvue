<template>
  <div id="app">
    <TopHeader/>
    <router-view/>
    <BottomFooter/>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import BottomFooter from './components/BottomFooter'

export default {
  name: 'App',
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>

<style>
  :root{
    --header-bg: #000000;
    --main-bg: #131C25;
    --color-: #D6B704;
    --color-hover: #e6a307;
    --font-color-menu: rgb(216, 214, 214);
    --footer-bg:#111111;
    --ytb: #FF0000;
    --fb: #4267B2;
    --twitch: #6441a5;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body{
    background-color: var(--main-bg);
    width: 100%;
    height: auto;
    padding-top: 125px
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  @media (max-width: 992px){
    *{
      font-size: 14px;
    }
  }
</style>
