<template>
  <div class="width-full d-flex height-full flex-row-reverse flex-center">
    <img
      src="../../assets/images/treatment.png"
      class="width-full height-full flex-1"
      alt=""
    />
    <div
      class="content width-full d-flex flex-center max-width-700 flex-2 flex-column height-full pa-5"
    >
      <h1 class="font-size-9 width-full text-white text-capitalize max-width-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p class="text-white font-size-4 text-justify width-full max-width-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        molestiae minus dolore iste culpa id nesciunt suscipit aliquid numquam
        iusto vitae saepe quis repellendus labore atque, doloribus dolores odio
        quidem.
      </p>
      <ul class="d-grid grid-columns-2 width-full max-width-900 flex-start mt-4 gap-5">
        <li
          v-for="item in 5"
          class="d-flex flex-start align-center gap-1 text-white"
        >
          <Icon name="mdi:check-circle" size="28" />
          Lorem ipsum dolor sit
        </li>
      </ul>
      <div class="d-flex flex-space-around mt-4 width-full max-width-900">
          <button
          style="width: 160px;"
            class="bg-white border-none outline-none cursor-pointer radius-8 pa-4 text-black text-center text-capitalize font-size-4"
          >
            find a doctor
          </button>
          <button
          style="width: 160px;"
            class="bg-transparent border-wa-1 line-solid border-gray-100 outline-none cursor-pointer radius-8 pa-4 text-white text-center text-capitalize font-size-4"
          >
            contact us
          </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
