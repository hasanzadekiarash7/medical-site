<template>
    <div class="imt-card width-full mb-10 transition height-full d-flex bg-blue-100 fle-center flex-column">
      <img
        src="../../assets/images/hair.jpg"
        class="width-full transition"
        alt=""
      />
      <div class="imt-card-content transition d-flex flex-center pa-5 flex-column gap-4 height-full text-center">
        <h1 class="font-size-5 transition">hello hair</h1>
        <button class="transition">learn more</button>
      </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.imt-card{
    height: 100%;
    max-height: 400px;
    width: 100%;
    max-width: 400px;
    &-content{
        height: 100%;
        button{
            outline: $border-1 solid $white;
            border: none;
            padding: $pa-2;
            font-size: $font-size-4;
            border-radius: $radius-1;
            background-color: $blue-200;
            cursor: pointer;
            &:hover{
                filter: brightness(90%);
            }
        }
    }
}
</style>
