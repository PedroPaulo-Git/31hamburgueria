<template>
  <div class="OurProducts">
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
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group flex mx-auto relative w-64 bg-white shadow-lg rounded-br-3xl"
        >
          <div class="w-full flex">
            <div class="p-2 shadow-lg rounded-br-3xl flex">
              <div class="h-40 text-right">
                <h3
                  class="mt-4 ml-4 font-extrabold text-xl text-yellow31 text-left"
                >
                  {{ product.name }}
                </h3>

                <div class="flex h-32">
                  <img
                    :src="product.imageSrc"
                    :alt="product.imageAlt"
                    class="aspect-square -ml-16 -mt-2 w-40 h-40 rounded-lg object-contain xl:aspect-[7/8]"
                  />
                  <span class="mr-3 max-h-1/2 flex flex-col justify-between">
                    <p class="mt-1 text-sm font-medium text-gray-400">
                      {{ product.imageAlt }}
                    </p>
                    <p
                      class="mt-1 text-lg font-extrabold text-gray-700 text-end mb-4"
                    >
                      {{ product.price }}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    name: "Earthen Bottle",
    href: "#",
    price: "R$48",
    imageSrc: product1,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "R$35",
    imageSrc: product2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "R$89",
    imageSrc: product3,
    imageAlt: "Person using a pen to cross a task off a.",
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "R$35",
    imageSrc: product4,
    imageAlt: "Hand holding black machined steel to cross a task off a.  ",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    price: "R$48",
    imageSrc: product5,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "#",
    price: "R$35",
    imageSrc: product6,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    price: "R$89",
    imageSrc: product7,
    imageAlt: "Person using a pen to cross a task off a.",
  },
  {
    id: 8,
    name: "Machined Pencil",
    href: "#",
    price: "R$35",
    imageSrc: product8,
    imageAlt: "Hand holding black machined steel to cross a task off a.  ",
  },
  // More products...
];
</script>
