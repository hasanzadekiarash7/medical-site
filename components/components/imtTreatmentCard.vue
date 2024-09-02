<template>
  <div class="imt-treatment" v-for="item in items">
    <img :src="item.imageLink" class="width-full radius-5" alt="" />
    <div class="imt-treatment-content pa-8">
      <p class="mb-5 font-bold">{{ item.title }}</p>
      <p class="text-gray-300">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { treatmentCard } from '../types/cards.t';

interface cardProps{
  items: Array<treatmentCard>
}
const props = defineProps<cardProps>()
</script>

<style lang="scss" scoped>
.imt-treatment{
  width: 100%;
  max-width: 350px;
  height: 100%;
  max-height: 430px;
  line-break: anywhere;
  img{
    height: 100%;
    max-height: 200px;
  }
    &-content{
      // height: 100%;
        margin-top: -4px;
        border: 1px solid $gray-300;
    }
}
</style>
