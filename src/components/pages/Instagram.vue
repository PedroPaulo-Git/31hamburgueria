



<template >
    <div class="flex py-20 pb-28 lg:py-44 bg-white items-center ">

   
    <div class="flex overflow-x-hidden flex-col-reverse lg:flex-row">
        <div class="flex overflow-x-scroll ">
        <div v-for="post in posts"
        v-bind:key="post.id"
        class="flex">
            <img :src="post.postImg" class="min-w-60 min-h-60 w-60 h-60 object-cover brightness-75" alt="">
           
        </div>
    </div>
        <span class="xl:min-w-[25rem] xl:w-[25rem] lg:min-w-[20rem] lg:w-[20rem] mb-10">
                <h1
                id="h1-about" class="text-5xl ml-4 lg:ml-12 font-bold">Siga-nos no Instagram e descubra</h1>
                <h1
                id="h1-about" class="text-4xl mb-5 lg:mb-2 ml-4 lg:ml-12 font-bold text-yellow31">nossos sabores! 🍔📸</h1>
                <a class="flex gap-5 items-center">
                    <h1
                    id="h1-about" class="text-2xl ml-4 lg:ml-12 font-extrabold underline cursor-pointer ">@31hamburgueria</h1>
                    <span class="icon-container mb-2">👈 </span>

                </a>
               

            </span>
    </div>
</div>
</template>



<script setup>
import post1 from '../../assets/instagram/insta1.jpg'
import post2 from '../../assets/instagram/insta2.jpg'
import post3 from '../../assets/instagram/insta3.jpg'
import post4 from '../../assets/instagram/insta4.jpg'
import post5 from '../../assets/instagram/insta5.jpg'
import post6 from '../../assets/instagram/insta6.jpg'
const posts = [
    {
        id:1,
        postImg:post1,
    },
    {
        id:2,
        postImg:post2,
    },
    {
        id:3,
        postImg:post3,
    },
  
    {
        id:5,
        postImg:post5,
    },
    {
        id:6,
        postImg:post6,
    },

]
import { Icon } from '@iconify/vue';

</script>
<style>
.icon-container {
    position: relative;
    font-size: 2rem; 
    animation: slide 2s linear infinite; 
  }
  
  @keyframes slide {
    0% {
      transform: translateX(-10%);
    }
    50% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(-10%);
    }
  }
</style>