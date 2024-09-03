<template>
  <div
    class="popular-treatment cursor-pointer mb-10 d-flex justify-space-between align-flex-start flex-column gap-4"
    @mouseenter="addAnimation"
  >
    <img :src="items.imageLink" class="width-full radius-6" alt="" />
    <div class="height-full">
      <h1 class="font-size-5">{{ items.title }}</h1>
      <p class="text-gray-300 font-size-4 width-full">
        {{ items.description }}
      </p>
      <button class="bg-gray-100 radius-2 pa-4 font-size-4">read more</button>
    </div>
    <hr
      class="border-none transition bg-emerald-400 radius-6"
      id="line"
      style="height: 3px"
    />
  </div>
</template>

<script setup lang="ts">
import type { treatmentCard } from "../types/cards.t";

interface cardProps {
  items: treatmentCard;
}
const props = defineProps<cardProps>();
function addAnimation() {
  console.log("hello");
  const line = document.querySelector("line");
  line?.classList.add("animation");
  setTimeout(() => {
    line?.classList.add("width-full");
    line?.classList.remove("animation");
  }, 1500);
}
</script>

<style lang="scss" scoped>
.popular-treatment {
  transform: scale(1);
  max-height: 100%;
  // height: 100px;
  hr {
    width: 0%;
  }
  &:hover {
    hr {
      width: 100%;
    }
  }

  p {
    max-width: 600px;
    height: 100%;
  }
  button {
    border: none;
  }
}
</style>
