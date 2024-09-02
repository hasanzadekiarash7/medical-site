<template>
  <div
    class="animation-info d-flex flex-column flex-center gap-6"
    v-for="item in items"
  >
    <div class="bg-blue-300 radius-10 text-white pa-2">
      <Icon :name="item.Icon" size="48" />
    </div>
    <p class="text-center font-size-5 text-gray-300">{{ item.title }}</p>
    <p class="font-size-6 text-center">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { infoCard } from '../types/cards.t';
interface cardProps {
  items: Array<infoCard>
}
const props = defineProps<cardProps>()
</script>

<style lang="scss" scoped>
.animation-info {
  div {
    width: 60px;
    height: 60px;
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
