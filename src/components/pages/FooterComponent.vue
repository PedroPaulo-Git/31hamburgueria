<template>
  <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->

  <footer class="bg-white">
    <div class="mx-auto lg:mx-0 lg:px-0">
      <div class="lg:flex lg:w-full lg:justify-items-end lg:h-80 ">
        <div class="footercomponent py-8 lg:py-4 lg:pt-12 lg:pe-16 lg:w-5/6 lg:mt-auto">
          <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:mt-0 ">
            <img
              class="w-64 lg:w-40 -mt-10 -mb-12 mx-auto"
              src="../../assets/logo31.png"
              alt=""
            />

            <div class="text-center items-center flex flex-col justify-center">
              <h1 class="text-white text-2xl font-bold">Entrar em contato</h1>

              <form class="mt-4 w-full ">
                <div
                  class="flex mx-auto justify-between gap-2 sm:flex sm:items-center sm:gap-4 lg:w-2/5 w-4/5 h-full"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Seu Email"
                    class="w-full p-2 border-none sm:text-sm placeholder:p-2"
                  />

                  <button class="w-1/2 bg-yellow31 h-full">Enviar</button>
                </div>
              </form>
            </div>
          </div>

          <div class="mt-8 mx-4 border-t lg:border-none border-gray-100 pt-8 lg:pt-0 lg:mt-6 lg:flex lg:justify-between">
            <ul class="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" class="text-gray-100 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-100 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-100 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>

            <p class="mt-8 text-xs text-gray-200 lg:mt-2">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
        <div
          class=" sm:max-w-none lg:max-w-lg  py-8  lg:py-16 lg:pr-20 lg:pl-10  bg-yellow31 lg:h-full flex items-center "
        >
         <div class="mx-4 flex">
          
            <ul class="gap-5 flex flex-col justify-center w-[30rem]">
                <li class="text-black flex gap-2 max-w-64">
                    <Icon icon="ic:baseline-whatsapp" width="18" height="18" />
                    <p class="font-bold text-sm">+55 81 9 9904-9803</p>
                </li>
                <li class="text-black flex gap-2 max-w-64">
                    <Icon icon="ic:baseline-email" width="18" height="18" />
                    <p class="font-bold text-sm">receberpedro09@gmail.com</p>
                </li>
                <li class="text-black flex gap-2 max-w-64">
                    <Icon icon="icon-park-solid:local" width="30" height="18" />
                    <p class="font-bold text-sm">Rua Nossa Senhora do Livramento, Vertentes - PE</p>
                </li>

            </ul>
            <img src="../../assets/hamburguer1.png" class="ml-0 lg:ml-20 w-80" alt="">
         </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import "./styles/FooterComponent.css";
import { Icon } from '@iconify/vue';
</script>

<style lang=""></style>
