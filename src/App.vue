<script setup>
import HelloWorld from './components/pages/HomePage.vue'
import HeaderHome from './components/Header.vue';

</script>

<template>
  <HeaderHome />
  <div>
 
  </div>
  <HelloWorld title='O sabor que você merece,no hambúrguer que você ama!' />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
