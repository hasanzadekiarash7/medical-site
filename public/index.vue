<template>
  <div class="width-full d-flex flex-center flex-column">
    <div class="health d-flex flex-center gap-4 max-width-1200 width-full">
      <div class="health-content">
        <div class="d-flex flex-start align-center gap-4">
          <Icon name="mdi:checkbox-marked" size="28" class="bg-emerald-400" />
          <h1 class="text-capitalize">iran medical tourism</h1>
        </div>
        <p style="max-width: 600px" class="width-full font-size-4">
          IMT is the most trusted Health Tourism Organizer in Iran. IMT provides
          international medical travel facilities with high quality healthcare
          services in IRAN.
        </p>
      </div>
      <img src="../assets/images/quote.png" alt="" />
    </div>
    <div class="width-full mt-7 max-width-1200">
      <h1 class="text-center my-10">IMT Packages</h1>
      <Swiper
        :modules="modules"
        space-between="20"
        autoplay
        :slides-per-view="5"
      >
        <SwiperSlide v-for="item in packageItems">
          <imt-package-card :items="item" has-action />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="width-full mt-7 max-width-1200">
      <p class="text-left font-bold font-sie-5 my-10">IMT Packages</p>
      <div
        class="d-grid grid-columns-4 grid-rows-2 flex-center gap-5 width-full"
      >
        <imt-treatment-card />
      </div>
    </div>
    <div class="width-full mt-7 max-width-1200">
      <div
        class="bottom-card position-relative hover-style-pack cursor-pointer"
      >
        <img src="../assets/images/MedicalVisaIMT.png" alt="" />
      </div>
    </div>
    <h1 class="my-10">Services Included in IMT Packages</h1>
    <div class="width-full mt-7 mb-4 max-width-1200">
      <CardPack :items="packCard" />
    </div>
    <div class="width-full mt-7 max-width-1200">
      <div
        class="bottom-card position-relative hover-style-pack cursor-pointer"
      >
        <img src="../assets/images/bottomCard.png" alt="" />
      </div>
    </div>
    <hr
      style="width: 100%; height: 0.5px; border: none"
      class="bg-gray-300 my-20"
    />
    <div class="width-full max-width-1200">
      <div class="d-grid grid-columns-3 flex-center gap-6 width-full">
        <info-animation />
      </div>
    </div>
    <h1 class="my-10 text-capitalize">popular treatments</h1>
    <div class="width-full mt-7 mb-4 max-width-1200">
      <Swiper
        :modules="modules"
        space-between="50"
        :pagination="{ clickable: true, dynamicBullets: true }"
        autoplay
        :slides-per-view="3"
      >
        <SwiperSlide v-for="item in 6">
          <popular-treatment />
        </SwiperSlide>
      </Swiper>
    </div>
    <div
      class="width-full mt-7 d-flex flex-center align-flex-start gap-5 mb-4 max-width-1200"
    >
      <img src="../assets/images/canDo.png" alt="" />
      <div>
        <h1 class="font-size-5 mb-3">What we can do for you in IMT</h1>
        <p
          class="font-size-4 text-gray-300 width-full"
          style="max-width: 800px"
        >
          We are the single point of contact for various types of medical
          treatment.We provide medical travel facilities as well which makes it
          easier for international patients to get seamless service and value
          for their money
        </p>
      </div>
    </div>
    <div class="width-full mt-7 max-width-1200">
      <MedicalGuide :cards="guideCards" />
    </div>
    <div class="width-full mt-7 max-width-1200">
      <h1 class="text-center text-capitalize my-10">medical center</h1>
      <Swiper
        :modules="modules"
        space-between="20"
        :pagination="{ clickable: true, dynamicBullets: true }"
        autoplay
        :slides-per-view="4"
      >
        <SwiperSlide v-for="item in 6">
          <imt-package-card />
        </SwiperSlide>
      </Swiper>
    </div>
    <div
      class="width-full d-flex flex-center pa-4"
      style="border-top: 1px solid #f5f5f4; background-color: #f5f5f5"
    >
      <div class="width-full max-width-1200 d-flex flex-space-between">
        <div class="d-flex flex-column flex-start">
          <p class="font-size-7 font-stylic font-700 text-gray-700 mb-2">
            Enjoy Your Life
          </p>
          <p class="font-size-7 font-stylic font-700 text-gray-700">
            With Your Family
          </p>
        </div>
        <button
          class="bg-lime-400 text-white d-flex flex-center font-size-5 radius-1 gap-3 hover-btn transition pa-5"
          style="border: none"
        >
          check up your health
          <Icon name="mdi:check-circle" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardPack from "~/components/components/cardPack.vue";
import MedicalGuide from "~/components/components/medicalGuide.vue";
import type { guide } from "~/components/types/guide.t";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import type { packageCard } from "~/components/types/cards.t";
const modules = ref([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const packCard = ref<
  Array<{
    icon: string;
    label: string;
    variant: "primary" | "secondary" | "tertiary" | "amber" | "success";
  }>
>([
  {
    icon: "icon-park-solid:hotel",
    label: "hotel",
    variant: "tertiary",
  },
  {
    icon: "mdi:translate",
    label: "escort interpreter",
    variant: "primary",
  },
  {
    icon: "fa6-solid:user-doctor",
    label: "surgery",
    variant: "secondary",
  },
  {
    icon: "mdi:bus",
    label: "transfer",
    variant: "primary",
  },
  {
    icon: "mdi:hospital-building",
    label: "pre-cost operative",
    variant: "tertiary",
  },
  {
    icon: "ion:shield-half-outline",
    label: "Health Arbitration",
    variant: "secondary",
  },
]);
const guideCards = ref<guide[]>([
  {
    icon: "ion:airplane",
    title: "Medical Travel",
    description:
      "Get assistance organizing flights, accommodation, aftercare and more",
  },
  {
    icon: "cib:cc-visa",
    title: "Medical Visa",
    description: "We prepare you medical visa on your treatment within 10 days",
  },
  {
    icon: "uiw:message",
    title: "Free Consulation",
    description: "You get free consultation on your treatment option 24H",
  },
  {
    icon: "fa6-solid:user-doctor",
    title: "Medical Treatment",
    description: "Learn more about the doctors and your treatment options",
  },
  {
    icon: "ion:shield-half-outline",
    title: "Health Arbitration",
    description:
      "The parties to a contract decide to settle their probable disputes in Privacy and Professionalism with Reasonable Costs",
  },
]);
const packageItems = ref<packageCard[]>([
  {
    title: "Hair",
    imageLink: ""
  },
]);
</script>

<style lang="scss" scoped>
.bottom-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  color: $black;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 1 !important;
  }
}
</style>
