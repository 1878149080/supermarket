<template>
  <div id="app">
    <router-view></router-view>
    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from "./components/content/main-bar.vue"
export default {
  name: 'App',
  components: {
    MainBar,
  }
}
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/font_8lnsx54cnu/iconfont.css";
</style>
