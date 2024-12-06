<template>
  <div v-if="cart.length > 0">
    <div
      @click="toggleModal"
      class="bg-[#1a1919] cursor-pointer z-10 fixed right-0 bottom-0 m-10 p-4 rounded-full text-center text-white flex justify-center items-center"
    >
      <Icon icon="mdi:cart" width="30" height="30" />
    </div>
  </div>
  <div
    v-if="isModalVisible"
    class="bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-10"
    @click.self="toggleModal"
  >
    <div
      v-if="isModalVisible"
      class="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
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

      <div class="mt-4 space-y-6">
        <div class="overflow-y-auto max-h-64 space-y-4">
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
        <div class="text-center mb-4" v-if="cart.length <= 0">
          <h1 class="-mt-5 mb-10">Adicione produtos ao carrinho !</h1>
        </div>
        <div class="space-y-4 text-center">
          <p
            class="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
          >
            Valor total: R$ {{ totalvalue.toFixed(2) }}
          </p>

          <a
            @click="toggleModalAddress"
            class="block rounded cursor-pointer bg-[#1a1919] px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Continuar
          </a>

          <a
            @click="clearCart"
            class="inline-block cursor-pointer text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Limpar carrinho
          </a>
        </div>
      </div>
    </div>
    <ModalAddress
      :cart="cart"
      :totalvalue="totalvalue"
      v-show="isModalAddressVisible"
      :toggleModalAddress="toggleModalAddress"
    />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
import ModalAddress from "./ModalAddress.vue";

const isModalVisible = ref(false);

const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value;
  console.log("modal patern:", isModalVisible.value);
  if (isModalVisible.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

const isModalAddressVisible = ref(false);

const toggleModalAddress = () => {
  if (props.cart.length > 0) {
    isModalAddressVisible.value = !isModalAddressVisible.value;
  }
  else{
    
  }
  console.log("address:", isModalAddressVisible.value);
  console.log("modal patern:", isModalVisible.value);
  if (isModalVisible.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

const emit = defineEmits(["clear-cart"]);
const clearCart = () => {
  emit("clear-cart");
};
const props = defineProps({
  cart: Array,
  totalvalue: {
    type: String,
    required: true,
  },
});
</script>
<style></style>
