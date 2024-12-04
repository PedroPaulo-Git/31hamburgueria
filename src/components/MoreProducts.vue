<template>
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center lg:mb-20">
            <span id="h1-about" class="text-4xl font-extrabold sm:text-6xl ">
                Peça outras delícias também!
          
        </span>
        </header>
    
        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mb-10">
        <div v-for="food in moreFoods"
        v-bind:key="food.id">
          <li>
            <a href="#" class="group block overflow-hidden">
              <img
              :src="food.postImg" 
              alt=""
                class="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
              />
    
              <div class="relative  pt-3">
                <span class="flex justify-between items-center text-center">

                    <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {{ food.name }}
                </h3>

                <div class=" pr-2 flex gap-5 text-white ">
                    <span class="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center">+</span>{{ item.quantity }} <span class="bg-red-600 w-6 h-6  rounded-full flex items-center justify-center">-</span> 
                </div>
              
                </span>

    
                <p class="mt-2">
    
                  <span class="tracking-wider text-gray-900">{{ food.price }} </span>
                </p>
              </div>
            </a>
          </li>
        </div>
        </ul>
      </div>
    </section>
  </template>
  <script setup>
import { ref } from 'vue';
import post1 from '../assets/morefoods/insta1.jpg'
import post2 from '../assets/morefoods/insta2.jpg'
import post3 from '../assets/morefoods/insta3.jpg'
import post4 from '../assets/morefoods/insta4.jpg'
import post5 from '../assets/morefoods/insta5.jpg'
import post6 from '../assets/morefoods/insta6.jpg'
import post7 from '../assets/morefoods/insta7.jpg'
import post8 from '../assets/morefoods/insta8.jpg'
import post9 from '../assets/morefoods/insta9.jpg'

const moreFoods = [
  {
    id: 1,
    postImg: post1,
    name: "Explosão de Cheddar",
    price: "R$ 30,00",
  },
  {
    id: 2,
    postImg: post2,
    name: "Hambúrguer BBQ Defumado",
    price: "R$ 35,00",
  },
  {
    id: 3,
    postImg: post3,
    name: "Delícia Clássica de Carne",
    price: "R$ 28,00",
  },
  {
    id: 4,
    postImg: post4,
    name: "Torre de Frango Crocante",
    price: "R$ 32,00",
  },
  {
    id: 5,
    postImg: post5,
    name: "Fiesta Vegana",
    price: "R$ 25,00",
  },
  {
    id: 6,
    postImg: post6,
    name: "Volcão Picante",
    price: "R$ 40,00",
  },
  {
    id: 7,
    postImg: post7,
    name: "Smash Bacon Duplo",
    price: "R$ 45,00",
  },
  {
    id: 8,
    postImg: post8,
    name: "Supremo de Alho e Ervas",
    price: "R$ 38,00",
  },
];



const cart= ref([]);

const btnAdd = () =>{
    
}

</script>