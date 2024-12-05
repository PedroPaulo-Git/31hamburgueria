<template>
  <div
    class="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
    aria-modal="true"
    role="dialog"
    tabindex="-1"
  >
    <button
      @click="closeModal"
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
    <h1 class="text-lg">Detalhes para Entrega</h1>
    <form action="">
      <div>
        <div class="mb-10 mt-5">
          <label
            for="UserEmail"
            class="block text-xs font-medium text-gray-700"
          >
            Nome Completo:
          </label>

          <input
            v-model="userDetails.fullName"
            type="text"
            id="fullname"
            placeholder="Nome Completo"
            class="p-2 my-1 mb-5 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            required
          />
          <div class="grid grid-cols-[3fr_1fr] gap-3">
            <div class="">
              <label
                for="UserEmail"
                class="block text-xs font-medium text-gray-700"
              >
                Endereço:
              </label>

              <input
                v-model="userDetails.address"
                type="text"
                id="address"
                placeholder="Rua / Bairro"
                class="p-2 my-1 mb-5 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                required
              />
            </div>
            <div class="">
              <label
                for="UserEmail"
                class="block text-xs font-medium text-gray-700"
              >
                Número:
              </label>

              <input
                v-model="userDetails.numberHouse"
                type="number"
                id="numberhouse"
                placeholder="nº"
                class="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                required
              />
            </div>
          </div>

          <label
            for="UserEmail"
            class="block text-xs font-medium text-gray-700"
          >
            Ponto de referência:
          </label>

          <input
            v-model="userDetails.referenceLocal"
            type="text"
            id="reference"
            placeholder="Ponto de referência"
            class="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            required
          />
        </div>

        <div class="space-y-4 text-center">
          <a
            @click.prevent="completeOrder"
            class="block rounded bg-yellow31 px-5 py-3 text-sm text-black font-semibold transition"
          >
            Finalizar Pedido
          </a>

          <a
            href="#"
            class="inline-block text-sm text-gray-400 underline underline-offset-4 transition"
          >
            Tirar dúvida ( ? )
          </a>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  toggleModalAddress: Function,
  cart: Array,
  totalvalue: Number,
});

const closeModal = () => {
  // Chama a função passada por prop para fechar o modal
  props.toggleModalAddress();
};

const userDetails = ref({
  fullName: "",
  address: "",
  numberHouse: "",
  referenceLocal: "",
});
const completeOrder = () => {
  if (
    !userDetails.value.fullName ||
    !userDetails.value.address ||
    !userDetails.value.numberHouse ||
    !userDetails.value.referenceLocal
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return; // Impede o envio do pedido
  }
  const cartItems = props.cart
    .map((item) => `• ${item.name} (Qtd: ${item.quantity}) - ${item.price}`)
    .join("\n");

  const formatCurrency = (value) => {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  };

  const message =
    `*Pedido de ${userDetails.value.fullName}*\n\n` +
    `Endereço: ${userDetails.value.address}, Nº: ${userDetails.value.numberHouse}\n` +
    `Ponto de Referência: ${userDetails.value.referenceLocal}\n\n` +
    `*Itens do Pedido:*\n` +
    `${cartItems}\n\n` +
    `*Valor Total:* ${formatCurrency(props.totalvalue)}`;
  const encodedMessage = encodeURIComponent(message.trim());
  const phoneNumber = "5581999049803";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");

  console.log("Cart:", JSON.parse(JSON.stringify(props.cart)));
  console.log("valor total cart", props.totalvalue);
  console.log("User Details:", userDetails.value);
};
</script>
