<template>
  <div class="package-card d-flex flex-center gap-3 width-full">
    <img
      src="../../assets/images/packages.png"
      class="width-full max-width-450"
      alt=""
    />
    <div class="d-flex flex-column flex-start">
      <div
        class="package-card--content d-flex flex-start gap-3 flex-column"
        v-for="item in 3"
      >
        <div class="d-flex flex-center gap-3">
          <Icon name="mdi:bag-checked" size="40" class="bg-teal-300" />
          <h1>hello world</h1>
        </div>
        <p class="text-gray-300 text-left max-width-700 font-size-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam,
          accusantium nam nobis numquam exercitationem non accusamus hic!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>
