<template>
  <div class="popular-treatment mb-10 d-flex justify-space-between align-flex-start flex-column gap-4">
    <img src="../../assets/images/bones.jpg" class="width-full mb-6" alt="" />
    <h1 class="font-size-5">bones, muscles & joints</h1>
    <p class="text-gray-300 font-size-4 width-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum
      laudantium debitis animi soluta sed, magnam dolores reiciendis, dicta
      error quae dignissimos dolorum minus. Magni!
    </p>
    <button class="bg-gray-100 radius-2 pa-4 font-size-4">read more</button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.popular-treatment{
    img{
        box-shadow: 0px 5px 4px 0px rgba($color: #000000, $alpha: 0.4);
    }
    p{
        max-width: 600px;
    }
    button{
        border: none;
    }
}
</style>
