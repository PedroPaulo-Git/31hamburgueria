<script setup>
import { ref } from "vue";
import Buttons from "../Buttons.vue";
import About from "./About.vue";
import OurProducts from "./OurProducts.vue";

defineProps({
  title: String,
});

const count = ref(0);
</script>

<template>

  <div class="relative w-full overflow-y-hidden">

    <div class="h-[40rem] lg:h-[55rem] sm:h-[40rem] ">
    <div
      class="bg-transparent absolute flex flex-col text-center items-center mt-12 xl:mt-30 sm:mt-32 h-full w-full"
    >
      <h1
        id="title"
        class="text-white xl:text-8xl sm:text-6xl text-5xl -mb-[70px] xl:-mb-32 xl:max-w-[100rem] sm:max-w-[60rem] max-w-[20rem]"
      >
        {{ title }}
      </h1>
      <img
        class="w-[420px] xl:w-[36rem] sm:w-[30rem]"
        src="../../assets/hamburguer1.png"
        alt=""
      />
      <div class="w-full flex justify-center gap-5">
        <Buttons />
      </div>
       
    </div>
  </div>

   <About/>
   <OurProducts/>

  </div>

  <div></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
