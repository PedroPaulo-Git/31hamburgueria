<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center lg:mb-20">
        <span id="h1-about" class="text-4xl font-extrabold sm:text-6xl">
          Peça outras delícias também!
        </span>
      </header>

      <ul
        class="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mb-10"
      >
        <div v-for="food in moreFoods" v-bind:key="food.id">
          <li>
            <a class="group block overflow-hidden">
              <img
                :src="food.imageSrc"
                alt=""
                class="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
              />

              <div class="relative pt-3">
                <span class="flex justify-between items-center text-center">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    {{ food.name }}
                  </h3>

                  <div class="flex gap-2 text-white">
                    <button
                      @click="addFoodVerify(food)"
                      class="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center"
                    >
                      +
                    </button>

                    <p class="text-black">
                      {{ getQuantityFoodInCart(food.id) }}
                    </p>

                    <button
                      @click="removeToCart(food)"
                      class="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center"
                    >
                      -
                    </button>
                  </div>
                </span>

                <p class="mt-2">
                  <span class="tracking-wider text-gray-900"
                    >{{ food.price }}
                  </span>
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
import { ref } from "vue";
import post1 from "../assets/morefoods/insta1.jpg";
import post2 from "../assets/morefoods/insta2.jpg";
import post3 from "../assets/morefoods/insta3.jpg";
import post4 from "../assets/morefoods/insta4.jpg";
import post5 from "../assets/morefoods/insta5.jpg";
import post6 from "../assets/morefoods/insta6.jpg";
import post7 from "../assets/morefoods/insta7.jpg";
import post8 from "../assets/morefoods/insta8.jpg";
import post9 from "../assets/morefoods/insta9.jpg";

const moreFoods = [
  {
    id: 9,
    imageSrc: post1,
    name: "Pão com Cheddar e Carne",
    price: "R$ 30,20",
    description:
      "Pão artesanal recheado com carne suculenta e cheddar cremoso.",
  },
  {
    id: 10,
    imageSrc: post2,
    name: "Brownie com Sorvete",
    price: "R$ 20,00",
    description:
      "Brownie de chocolate servido com uma bola de sorvete de creme.",
  },
  {
    id: 11,
    imageSrc: post3,
    name: "Combo Batata e Molho",
    price: "R$ 15,00",
    description:
      "Porção de batatas fritas crocantes acompanhadas de molho especial.",
  },
  {
    id: 12,
    imageSrc: post4,
    name: "Barca de Delícias",
    price: "R$ 45,00",
    description:
      "Hambúrguer, nuggets, batatas fritas e molho cheddar em uma barca.",
  },
  {
    id: 13,
    imageSrc: post5,
    name: "Esfirra Tradicional (Frango)",
    price: "R$ 10,00",
    description: "Esfirra de carne bem temperada, assada na hora.",
  },
  {
    id: 14,
    imageSrc: post6,
    name: "Pastel Recheado (Carne)",
    price: "R$ 12,00",
    description: "Pastel crocante com recheio generoso de queijo e presunto.",
  },
  {
    id: 15,
    imageSrc: post7,
    name: "Pastel Empanado (Misto)",
    price: "R$ 14,00",
    description:
      "Pastel frito com camada crocante de empanado e recheio saboroso.",
  },
  {
    id: 16,
    imageSrc: post8,
    name: "Empada Cremosa",
    price: "R$ 8,00",
    description: "Empada recheada com frango cremoso e temperos especiais.",
  },
];

import { defineProps, defineEmits } from "vue";

const props = defineProps({
  cart: Array,
  getQuantityFoodInCart: Function,
});
const emit = defineEmits(["btnToAdd", "removeToCart"]);

const btnToAdd = (food) => {
  const itemExisting = props.cart.find(
    (item) => item.id === food.id && item.sabor === food.sabor
  );
  if (itemExisting) {
    itemExisting.quantity = +1;
  } else {
    emit("btnToAdd", { ...food, quantity: 1 });
  }
  // const itemToAdd = {...food };
  // if(selectedFood.value && selectedFood.value.id === food.id){
  //   itemToAdd.sabor = selectedFood.value.sabor;
  // }
  // emit("btnToAdd", itemToAdd);
};
const removeToCart = (food) => {
  emit("removeToCart", food);
};

const showModal = ref(null);
const selectedFood = ref(null);

const toggleCloseModal = () => {
  showModal.value = null;
  selectedFood.value = null;
};
const addFoodVerify = (food) => {
  if (showModal) {
    console.log(showModal);
  }
  if (food.sabores) {
    selectedFood.value = { ...food };
    showModal.value = food.id;
  } else {
    btnToAdd(food);
  }
};

const selectSabor = (sabor) => {
  if (selectedFood.value) {
    const FoodWithSabor = { ...selectedFood.value, sabor }; 
    console.log(
      "SABOR SELECIONADO:",
      sabor,
      "da comida:",
      selectedFood.value.name,

    );
    btnToAdd(FoodWithSabor); 
  }
};
</script>
