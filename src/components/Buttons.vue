<template>
  <a
    class="group relative inline-block text-sm font-medium text-yellow31 "
    href="#cardapio"
  >
    <div class="items-center text-center">
      <span class="relative block font-semibold px-8 py-4 pb-0 text-lg">
        Ver cardápio
      </span>
      <span><svg id="arrowdown" class="cursor-pointer mx-auto text-2xl" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
	</svg>
  <svg id="arrowanimationsecondary" class="cursor-pointer mx-auto text-2xl -mt-7" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
	</svg></span>
    </div>
  </a>
</template>
<style scoped>
#arrowdown {
  animation: arrowanimation 2s linear infinite;
  } 
#arrowanimationsecondary{
  animation: arrowanimationsecondary 2s linear infinite;
}
  @keyframes arrowanimation {
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(-10%);
      
    }
    100%{
      transform: translateY(0);
    }
    
}
@keyframes arrowanimationsecondary {
    0%{
      transform: translateY(-5%);
      opacity: 100%;
    }
    50%{
      transform: translateY(10%);
      opacity: 10%;
    }
    100%{
      transform: translateY(15%);
      opacity: 0%;
    }
    
}
</style>
<!-- 
  <template>
    Base 
    <a
      class="group relative inline-block text-sm font-medium text-yellow31 focus:outline-none focus:ring active:yellow31"
      href="#"
    >
      <span
        class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow31 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
      ></span>
    
      <span class="relative block border border-current bg-[#1a1c20] px-8 py-3"> Compre já </span>
    </a>
    
   Hover 
    
    <a
      class="group relative inline-block text-sm font-medium text-yellow31 focus:outline-none focus:ring active:yellow31"
      href="#"
    >
      <span
        class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow31 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
      ></span>
    
      <span class="relative block border border-current bg-[#1a1c20] px-8 py-3"> Ver cardápio </span>
    </a>
  </template> -->
