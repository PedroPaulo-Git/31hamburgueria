<template>
  <div class="OurProducts" id="cardapio">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <div class="items-center text-center mb-20">
        <span id="h1-about" class="text-3xl font-extrabold sm:text-5xl">
          Conheça Nosso
          <h1
            id="h1-about"
            class="text-7xl font-extrabold sm:text-6xl text-yellow31 sm:block"
          >
            Cardápio
          </h1>
        </span>
      </div>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-20 z-10"
      >
        <a
          v-for="food in products"
          :key="food.id"
          class="group flex mx-auto relative w-64 bg-white shadow-lg rounded-br-3xl"
        >
          <div class="w-full flex">
            <div class="p-2 shadow-lg rounded-br-3xl flex">
              <div class="h-40 text-right">
                <h3
                  class="mt-4 ml-4 font-extrabold text-xl text-yellow31 text-left"
                >
                  {{ food.name }}
                </h3>

                <div class="flex h-32">
                  <img
                    :src="food.imageSrc"
                    :alt="food.imageAlt"
                    class="aspect-square -ml-16 -mt-2 w-40 h-40 rounded-lg object-contain xl:aspect-[7/8]"
                  />
                  <span class="mr-3 max-h-1/2 flex flex-col justify-between">
                    <p class="mt-1 text-sm font-medium text-gray-400">
                      {{ food.imageAlt }}
                    </p>

                    <span class="flex justify-between items-center mb-4">
                      <div class="flex gap-2 text-white">
                        <button
                          @click="btnAdd(food)"
                          class="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                        
                        <p class="text-black ">{{ getQuantityFoodInCart(food.id) }}</p>

                        <button
                          @click="btnRemove(food)"
                          class="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                      </div>
                      <p
                        class="mt-1 text-lg font-extrabold text-gray-700 text-end min-w-[40%]"
                      >
                        {{ food.price }}
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <MoreProducts :getQuantityFoodInCart="getQuantityFoodInCart" :cart="cart" @btnToAdd="btnAdd" @removeToCart="btnRemove" />
    <ButtonCart :cart="cart" :totalvalue="totalvalue" @clear-cart="clearCart" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MoreProducts from "../MoreProducts.vue";
import ButtonCart from "../ButtonCart.vue";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";
import "./styles/OurProducts.css";

const products = [
  {
    id: 1,
    name: "Classic Burger",
    href: "#",
    price: "R$40",
    imageSrc: product1,
    imageAlt: "Um hambúrguer clássico com queijo, alface e tomate.",
  },
  {
    id: 2,
    name: "Black Bun Burger",
    href: "#",
    price: "R$42",
    imageSrc: product2,
    imageAlt: "Um hambúrguer gourmet com pão preto, queijo suíço e cebola roxa.",
  },
  {
    id: 3,
    name: "Cheddar Deluxe",
    href: "#",
    price: "R$39",
    imageSrc: product3,
    imageAlt: "Hambúrguer com cheddar derretido, bacon crocante e molho especial.",
  },
  {
    id: 4,
    name: "Spicy Jalapeño",
    href: "#",
    price: "R$41",
    imageSrc: product4,
    imageAlt: "Um hambúrguer apimentado com jalapeños e maionese picante.",
  },
  {
    id: 5,
    name: "BBQ Bacon Burger",
    href: "#",
    price: "R$43",
    imageSrc: product5,
    imageAlt: "Hambúrguer com molho barbecue, bacon defumado e cebola caramelizada.",
  },
  {
    id: 6,
    name: "Veggie Delight",
    href: "#",
    price: "R$38",
    imageSrc: product6,
    imageAlt: "Hambúrguer vegetariano com grão-de-bico, alface e abacate.",
  },
  {
    id: 7,
    name: "Egg Burger",
    href: "#",
    price: "R$40",
    imageSrc: product7,
    imageAlt: "Hambúrguer com ovo frito, queijo derretido e molho especial.",
  },
  {
    id: 8,
    name: "Chicken Burger",
    href: "#",
    price: "R$39",
    imageSrc: product8,
    imageAlt: "Hambúrguer de frango empanado, alface crocante e maionese caseira.",
  },
];


const cart = ref([]);
let totalvalue = ref(0);

const btnAdd = (food) => {
  console.log("Adicionando item:", food.name, "Preço:", food.price);
  const item = cart.value.find((cartItem) => cartItem.id === food.id);
  const priceString = food.price.replace("R$", "").trim();
  const price = parseFloat(priceString.replace(",","."));
  if (isNaN(price)) {
    console.error("invalid price to ", food.name);
    return;
  }

  if (item) {
    item.quantity++;
    totalvalue.value += price;
  } else {
    cart.value.unshift({ ...food, quantity: 1 });
    totalvalue.value += price;
  }
  cart.value.forEach(item => {
  console.log(item);
});
};

const btnRemove = (food) => {
  console.log("button remove clicked")
  const priceString = food.price.replace("R$", "").trim();
  const price = parseFloat(priceString);
  if (isNaN(price)) {
    console.error("invalid price to ", food.name);
    return;
  }
  const item = cart.value.find((cartItem) => cartItem.id === food.id);
  if (item && item.quantity > 1) {
    item.quantity--;

  } else {
    cart.value = cart.value.filter((cartItem) => cartItem.id !== food.id);
  }

  totalvalue.value = cart.value.reduce((total,item) => {
    const foodprice = parseFloat(item.price.replace("R$","").trim());
    return total + foodprice * item.quantity;
  },0)

  if (totalvalue.value < 0) totalvalue.value = 0;

  cart.value.forEach(item => {
  console.log(item); 
});

};
const formatCurrency = (value) => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};

const clearCart = () => {
  cart.value = []
  totalvalue.value = 0
};

const getTotalValueFormatted = () => formatCurrency(totalvalue.value);
const getQuantityFoodInCart = (id) => {
  const food = cart.value.find((cartItem)=> cartItem.id === id);
  return food ? food.quantity : 0;
}
</script>
