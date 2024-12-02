<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
  
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a v-for="product in products" :key="product.id" :href="product.href" class="group flex relative w-full ">

            
            <div class=" w-full flex">
                
                <div class="mx-2 shadow-lg rounded-br-xl flex">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square absolute w-40 rounded-lg object-contain group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div class="mx-10 h-40 text-right">
                    <h3 class="mt-4 text-xl text-yellow31">{{ product.name }}</h3>
                    <p class="mt-1 text-sm font-medium text-gray-400">{{ product.imageAlt }}</p>
                    <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
                 </div>
                </div>
                
                
            </div>
           
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import product1 from "../../assets/product1.png"
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: product1,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: product1,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: product1,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: product1,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  </script>