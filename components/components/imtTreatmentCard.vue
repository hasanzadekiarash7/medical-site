<template>
  <div class="imt-treatment" v-for="item in 8">
    <img src="../../assets/images/eye.jpg" class="width-full radius-5" alt="" />
    <div class="imt-treatment-content pa-8">
      <p class="mb-5 font-bold">Other Eye Disorders</p>
      <p class="text-gray-300">
        Sometimes an underlying disease or condition, such as Graves’ disease or
        a tumor behind the… 
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.imt-treatment{
    &-content{
        margin-top: -4px;
        border: 1px solid $gray-300;
    }
}
</style>
