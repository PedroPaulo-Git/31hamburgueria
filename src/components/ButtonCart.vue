<template>
  <div v-if="cart.length > 0">
    <div
      @click="toggleModal"
      class="bg-black fixed right-0 bottom-0 m-10 w-20 h-20 rounded-full text-center text-white flex justify-center items-center"
    >
      Cart
    </div>
  </div>

  <div
    v-if="isModalVisible"
    class="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 "
    aria-modal="true"
    role="dialog"
    tabindex="-1"
  >
    <button
      @click="toggleModal"
      class="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
    >
      <span class="sr-only">Close cart</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div class="mt-4 space-y-6  ">
      <div class="overflow-y-scroll max-h-64 space-y-4 ">
        <ul v-for="food in cart">
        <li class="flex items-center gap-4">
          <img
            :src="food.imageSrc"
            alt=""
            class="size-16 rounded object-cover"
          />

          <div>
            <h3 class="text-sm text-gray-900">{{ food.name }}</h3>

            <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt class="inline">Quantidade:</dt>
                <dd class="inline">{{ food.quantity }}</dd>
              </div>

              <div>
                <dt class="inline">Preço:</dt>
                <dd class="inline">{{ food.price }}</dd>
              </div>
            </dl>
          </div>
        </li>

      </ul>
      
      
      </div>
      <div class="space-y-4 text-center">
        <a
          href="#"
          class="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
        >
        Valor total: R$ {{ totalvalue.toFixed(2) }}
        </a>

        <a
          href="#"
          class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Comprar
        </a>

        <a
          href="#"
          class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Valor total da compra: R$200
        </a>
      </div>

    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
const isModalVisible = ref(false);
const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value;
};
const props = defineProps({
  cart: Array,
  totalvalue: Number,
});
</script>
<style></style>
