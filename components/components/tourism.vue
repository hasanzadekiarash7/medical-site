<template>
  <div class="d-flex flex-row-reverse width-full flex-space-between gap-8">
    <img src="../../assets/images/tur.jpg" class="width-full" style="height: 700px;" alt="" />
    <div class="width-full">
      <h1 class="text-sky-300 text-capitalize font-size-6">tourism</h1>
      <h1 class="text-capitalize font-size-7">Lorem, ipsum.</h1>
      <p class="text-gray-300 text-justify width-full max-width-700 font-size-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        voluptatem est ratione illum a quam veniam perferendis delectus vitae
        vel.
      </p>
      <hr />
      <ul
        class="d-grid grid-columns-1 width-full max-width-900 flex-start mt-4 gap-5"
      >
        <li
          v-for="item in 3"
          class="d-flex flex-start align-center gap-1 text-black"
        >
          <Icon name="mdi:check-circle" size="28" class="bg-lime-400" />
          Lorem ipsum dolor sit Lorem ipsum dolor sit 
        </li>
      </ul>
      <button class="bg-black text-white radius-8 pa-5 border-none mt-7 cursor-pointer outline-none font-size-4" style="width: 170px">
        learn more
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface tourismProps {
    language: "fa" | "en" | "br" | "id" | "fi"
}
</script>

<style lang="scss" scoped></style>
