<template>
  <div
    class="medical-slide width-full max-width-1200 d-flex flex-center flex-column gap-6"
  >
    <div
      class="medical-slide--content width-full d-flex flex-space-around gap-5"
      v-if="progressWidth === 8"
    >
      <div class="d-flex flex-center width-full">
        <img
          src="../../assets/images/timeline-1.jpg"
          class="width-full"
          alt=""
        />
      </div>
      <div class="d-flex flex-start align-center width-full flex-column gap-7">
        <h1 class="font-size-9">
          Unguja has beautiful sandy beaches with fringing
          <strong class="text-orange-500"> coral reefs </strong>
        </h1>
        <p class="font-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    </div>
    <div
      class="medical-slide--content width-full d-flex flex-space-around gap-5"
      v-if="progressWidth === 28"
    >
      <div class="d-flex flex-center width-full">
        <img
          src="../../assets/images/timeline-2.jpg"
          class="width-full"
          alt=""
        />
      </div>
      <div class="d-flex flex-start align-center width-full flex-column gap-7">
        <h1 class="font-size-9">
          Unguja has beautiful sandy beaches with fringing
          <strong class="text-orange-500"> coral reefs </strong>
        </h1>
        <p class="font-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    </div>
    <div
      class="medical-slide--content width-full d-flex flex-space-around gap-5"
      v-if="progressWidth === 48"
    >
      <div class="d-flex flex-center width-full">
        <img
          src="../../assets/images/timeline-3.jpg"
          class="width-full"
          alt=""
        />
      </div>
      <div class="d-flex flex-start align-center width-full flex-column gap-7">
        <h1 class="font-size-9">
          Unguja has beautiful sandy beaches with fringing
          <strong class="text-orange-500"> coral reefs </strong>
        </h1>
        <p class="font-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    </div>
    <div
      class="medical-slide--content width-full d-flex flex-space-around gap-5"
      v-if="progressWidth === 68"
    >
      <div class="d-flex flex-center width-full">
        <img
          src="../../assets/images/timeline-4.jpg"
          class="width-full"
          alt=""
        />
      </div>
      <div class="d-flex flex-start align-center width-full flex-column gap-7">
        <h1 class="font-size-9">
          Unguja has beautiful sandy beaches with fringing
          <strong class="text-orange-500"> coral reefs </strong>
        </h1>
        <p class="font-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    </div>
    <div
      class="medical-slide--content width-full d-flex flex-space-around gap-5"
      v-if="progressWidth === 90"
    >
      <div class="d-flex flex-center width-full">
        <img
          src="../../assets/images/timeline-5.jpg"
          class="width-full"
          alt=""
        />
      </div>
      <div class="d-flex flex-start align-center width-full flex-column gap-7">
        <h1 class="font-size-9">
          Unguja has beautiful sandy beaches with fringing
          <strong class="text-orange-500"> coral reefs </strong>
        </h1>
        <p class="font-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    </div>
    <div class="slide-bar transition mt-10 position-relative">
      <hr :style="{ width: `${progressWidth}%` }" class="transition" />
      <div
        class="d-flex flex-space-around position-absolute width-full gap-3"
        style="z-index: 10; top: -32px"
      >
        <div class="d-flex flex-center flex-column" @click="progressWidth = 8">
          <p class="d-flex flex-start">
            <Icon name="mdi:city" size="20" />
            hotel
          </p>
          <div class="slide-selects"></div>
        </div>
        <div class="d-flex flex-center flex-column" @click="progressWidth = 28">
          <p class="d-flex flex-start">
            <Icon name="mdi:translate" size="20" />
            escort
          </p>
          <div class="slide-selects"></div>
        </div>
        <div class="d-flex flex-center flex-column" @click="progressWidth = 48">
          <p class="d-flex flex-start">
            <Icon name="mdi:doctor" size="20" />
            surgery
          </p>
          <div class="slide-selects"></div>
        </div>
        <div class="d-flex flex-center flex-column" @click="progressWidth = 68">
          <p class="d-flex flex-start">
            <Icon name="mdi:bus" size="20" />
            transfer
          </p>
          <div class="slide-selects"></div>
        </div>
        <div class="d-flex flex-center flex-column" @click="progressWidth = 90">
          <p class="d-flex flex-start">
            <Icon name="mdi:hospital-building" size="20" />
            operative
          </p>
          <div class="slide-selects"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const progressWidth = ref(8);
onMounted(() => {
  setInterval(() => {
    switch (progressWidth.value) {
      case 8:
        progressWidth.value = 28;
        break;
      case 28:
        progressWidth.value = 48;
        break;
      case 48:
        progressWidth.value = 68;
        break;
      case 68:
        progressWidth.value = 90;
        break;
      case 90:
        progressWidth.value = 8;
        break;
    }
  }, 7000);
});
</script>

<style lang="scss" scoped>
.slide-bar {
  width: 100%;
  background-color: $gray-200;
  margin-bottom: $mb-8;
  border-radius: $radius-6;
  hr {
    background-color: $orange-400;
    height: 4px;
    border: none;
    border-radius: $radius-6;
    // width: 0%;
  }
}
.slide-selects {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: $radius-6;
  background-color: $orange-300;
}
</style>
