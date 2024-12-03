<template>
  <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->

  <footer class="footercomponent">
    <div class="mx-auto sm:px-6 lg:mx-0 lg:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:w-full lg:justify-items-end">
        <div class="py-8 lg:py-16 lg:pe-16 lg:w-5/6">
          <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <img
              class="w-64 lg:w-40 -mt-10 -mb-12 mx-auto"
              src="../../assets/logo31.png"
              alt=""
            />

            <div class="text-center items-center flex flex-col justify-center">
              <h1 class="text-white text-2xl font-bold">Entrar em contato</h1>

              <form class="mt-4 w-full ">
                <div
                  class="flex mx-auto justify-between gap-2 sm:flex sm:items-center sm:gap-4 w-4/5"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Seu Email"
                    class="w-full p-2 border-none sm:text-sm placeholder:p-2"
                  />

                  <button class="w-1/2 bg-yellow31">Enviar</button>
                </div>
              </form>
            </div>
          </div>

          <div class="mt-8 mx-4 border-t lg:border-none border-gray-100 pt-8">
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

            <p class="mt-8 text-xs text-gray-200">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
        <div
          class="border-b max-w-lg border-gray-100 py-8  lg:py-16 lg:pr-20 lg:pl-10 bg-yellow31"
        >
         <div class="mx-4">
            <ul class="gap-5 flex flex-col">
                <li class="text-black flex gap-2 max-w-64">
                    <Icon icon="ic:baseline-whatsapp" width="18" height="18" />
                    <p class="font-bold text-sm">+55 81 9 9904-9803</p>
                </li>
                <li class="text-black flex gap-2 max-w-64">
                    <Icon icon="ic:baseline-email" width="18" height="18" />
                    <p class="font-bold text-sm">receberpedro09@gmail.com</p>
                </li>
                <li class="text-black flex gap-2 max-w-64">
                    <Icon icon="icon-park-solid:local" width="18" height="18" />
                    <p class="font-bold text-sm">Rua Nossa Senhora do Livramento, Vertentes - PE</p>
                </li>

            </ul>
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
