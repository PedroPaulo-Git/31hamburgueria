

<template>
    <header class="relative w-[90%] h-26">
      <nav class="mx-auto flex max-w-7xl items-center justify-between py-11 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 ">
            <span class="sr-only">Your Company</span>
            <img class="absolute w-32 top-0 -mt-2" src="../assets/logo31.png" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-8" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12 items-center">
          
          <a href="#cardapio" class="text-sm/6 font-semibold text-white">Cardápio</a>
          <a href="#sobre" class="text-sm/6 font-semibold text-white">Sobre nós</a>
          <a href="#insta" class="text-sm/6 font-semibold text-white">Siga-nos</a>
          <a href="#footer" class="text-sm/6 font-semibold text-white">Horários</a>
          
           <a
           @click="talkToUs"
            class="flex gap-3 rounded-full bg-yellow31 px-8 py-3 text-sm font-medium text-black shadow hover:bg-[#171a1d] hover:text-white focus:outline-none focus:ring active:bg-gray-900 active:text-white sm:w-auto"
          >
            Fale Conosco
            <span>
              <Icon class="" icon="ic:baseline-whatsapp" width="20" height="20" />
            </span>
          </a>
        </PopoverGroup>
       
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-28 w-32 -my-6 -ml-4 " src="../assets/logo31_3.png" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/5 font-semibold text-gray-900 hover:bg-gray-50">
                    <span class="flex gap-3 items-center text-center"><Icon icon="tabler:clock" width="24" height="24" />Horários</span>
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...openingHours]" :key="item.day" as="a"  class="block rounded-lg py-2 pl-6 pr-3 text-sm/5 font-semibold text-gray-700 hover:bg-gray-50">- {{ item.day }}<span class="font-bold text-gray-900">{{ item.hours }}</span></DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <span class="flex gap-3 items-center text-center"><Icon icon="lsicon:badge-promotion-outline" width="24" height="24" />Promoções</span>
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-0">
                    <DisclosureButton v-for="promo in [...promotions]" :key="promo.day" as="a"  class="block rounded-lg py-2 pl-6 pr-3 text-sm/5 font-semibold text-gray-700 hover:bg-gray-50">• {{ promo.day }}<span class="font-bold text-gray-900"> | {{ promo.description }}</span></DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                
                <a @click="mobileMenuOpen = false" href="#sobre" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Sobre nós</a>
                <a @click="mobileMenuOpen = false" href="#cardapio" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Cardápio</a>
                <a @click="mobileMenuOpen = false" href="#insta" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Siga-nos</a>
              </div>
              <div class="py-6">
                <a @click="talkToUs" class="flex items-center gap-4 -mx-3 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Fale Conosco <Icon class="" icon="ic:baseline-whatsapp" width="20" height="20" /></a>
                <a class="flex items-center gap-4 -mx-3 rounded-lg px-3 py-2.5 text-gray-600 text-xs"><Icon icon="icon-park-solid:local" width="20" height="18" />Vertentes - PE  | Rua Nossa Senhora do Livramento</a>
              
              
              </div>
              
            </div>
          </div>
          <span class=" absolute bottom-0 right-0 mr-4 mb-2 text-sm flex gap-1 font-bold text-gray-500">Desenvolvido por <a href="https://pedrodevofc.vercel.app/" target="blank" class=" text-black cursor-pointer font-extrabold"> Pedro</a></span>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue';
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

  const openingHours = [
  { 
    day: 'Quarta a Sexta das ', 
    hours: '18:00 às 22:00', 
  },
  { 
    day: 'Sábado das ', 
    hours: '18:00 às 23:00', 
  },
  { 
    day: 'Domingo das ', 
    hours: '17:00 às 23:00', 
  },
]

const promotions = [
  { day: 'Quarta', description: 'Desconto de 10% no primeiro pedido.' },
  { day: 'Domingo', description: 'Sobremesa grátis para pedidos acima de R$50.' },
]

const talkToUs = () => {
  const phoneNumber = "5581999049803";
  const EntrarContato = `https://wa.me/${phoneNumber}?text=Olá, gostaria de falar com vocês. Estou entrando em contato para conversar.`;


  window.open(EntrarContato, "_blank");
};
  
  const mobileMenuOpen = ref(false)
  </script>