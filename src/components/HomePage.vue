<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
})

const count = ref(0)
</script>

<template>
  

  <div class="bg-transparent absolute flex flex-col text-center items-center mt-48 lg:mt-40 ">
      <h1 id="title" class="text-white lg:text-9xl text-5xl -mb-[70px] lg:-mb-32 lg:max-w-[100rem] max-w-[20rem]">{{ title }}</h1>
      <img class="w-[420px] lg:w-[42rem]" src="../assets/hamburguer1.png" alt="">
  </div>
  <div>
  
  </div>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
