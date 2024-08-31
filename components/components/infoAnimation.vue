<template>
  <div
    class="animation-info d-flex flex-column flex-center gap-6"
    v-for="item in 3"
  >
    <div class="bg-blue-300 radius-7 text-white pa-2">
      <Icon name="mdi:map-marker" size="28" />
    </div>
    <p class="text-center font-size-5 text-gray-300">Visit our Location</p>
    <p class="font-size-6 text-center">
      Nilufar Sq. Khorramshahr St, Tehran, Iran
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.animation-info {
  div {
    width: 40px;
    height: 40px;
    animation: rotateIcon 2s ease-in-out 1s infinite;
  }
}
@keyframes rotateIcon {
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 3, 0, 360deg);
  }
}
</style>
