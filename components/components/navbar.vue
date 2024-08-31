<template>
  <div class="width-full d-flex flex-center">
    <div
      class="width-full max-width-1200 px-2 py-4 d-flex flex-center flex-column"
    >
      <div class="navbar-top d-flex flex-space-between width-full mt-3">
        <div class="navbar-top-content d-flex flex-center" style="gap: 10px">
          <Icon name="mdi:phone" />
          +989024113606
          <p>iran medical tourism</p>
        </div>
        <div class="navbar-top-fallow_us d-flex cursor-pointer gap-2">
          <div class="transition d-flex flex-center">
            <Icon name="mdi:eye" size="32" />
          </div>
          <div class="transition d-flex flex-center">
            <Icon name="mdi:facebook" size="32" />
          </div>
          <div class="transition d-flex flex-center">
            <Icon name="mdi:chili-hot" size="32" />
          </div>
          <div class="transition d-flex flex-center">
            <Icon name="mdi:car" size="32" />
          </div>
          <div class="transition d-flex flex-center">
            <Icon name="mdi:transcribe" size="32" />
          </div>
          <div class="transition d-flex flex-center">
            <Icon name="mdi:twitch" size="32" />
          </div>
        </div>
      </div>
      <hr
        style="width: 100%; height: 0.5px; border: none"
        class="bg-gray-300 my-4"
      />
      <div class="navbar-bottom d-flex flex-space-between width-full">
        <img src="../../assets/images/logo.png" alt="" />
        <ul
          class="d-flex flex-center text-gray-200 font-100 cursor-pointer"
          style="gap: 10px"
        >
          <li class="transition hover-blue">home</li>
          <li class="transition hover-blue">treatment</li>
          <li class="transition hover-blue">packages</li>
          <li class="transition hover-blue">doctors</li>
          <li class="transition hover-blue">hospitals</li>
          <li class="transition hover-blue">about us</li>
          <li class="transition hover-blue">contact</li>
          <li class="transition hover-blue">chose language</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import url("../../assets/layoutsStyle.scss");
.hover-blue {
  &:hover {
    color: $blue-400;
  }
}
</style>
