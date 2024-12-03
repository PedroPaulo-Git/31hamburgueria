<template>
  <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->

  <footer class="footercomponent">
    <div class="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2">
        <div class="py-8 lg:py-16 lg:pe-16">
          <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <img
              class="w-64 -mt-10 -mb-12 mx-auto"
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

          <div class="mt-8 mx-4 border-t border-gray-100 pt-8">
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
          class="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16 bg-yellow31"
        >
          <div class="block text-teal-600 lg:hidden">
            <img
              class="w-64 -mt-10 -mb-12 mx-auto"
              src="../../assets/logo31.png"
              alt=""
            />
          </div>

          <div class="mt-8 space-y-4 lg:mt-0">
            <span class="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

            <div>
              <h2 class="text-2xl font-medium text-gray-900">Request a Demo</h2>

              <p class="mt-4 max-w-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, harum deserunt nesciunt praesentium, repellendus eum
                perspiciatis ratione pariatur a aperiam eius numquam doloribus
                asperiores sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import "./styles/FooterComponent.css";
</script>

<style lang=""></style>
