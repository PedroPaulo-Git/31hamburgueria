<script setup>
import { ref } from 'vue'
import Buttons from '../Buttons.vue';
defineProps({
  title: String,
})

const count = ref(0)
</script>

<template>
  

  <div class="bg-transparent absolute flex flex-col text-center items-center mt-48 xl:mt-44 sm:mt-36 ">
      <h1 id="title" class="text-white xl:text-8xl sm:text-6xl text-5xl -mb-[70px] xl:-mb-32 xl:max-w-[100rem] sm:max-w-[60rem] max-w-[20rem]">{{ title }}</h1>
      <img class="w-[420px] xl:w-[36rem] sm:w-[30rem]" src="../../assets/hamburguer1.png" alt="">
      <div class="w-full flex justify-center gap-5">
        <Buttons/>
      </div>
 </div>
  <div>
  
  </div>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
