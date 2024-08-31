<template>
  <div class="width-full pa-2 d-flex flex-center flex-column">
    <div class="health d-flex flex-center gap-4 max-width-1200 width-full">
      <div class="health-content">
        <div class="d-flex flex-start align-center gap-4">
          <Icon name="mdi:checkbox-marked" size="28" class="bg-emerald-400" />
          <h1 class="text-capitalize">iran medical tourism</h1>
        </div>
        <p style="max-width: 600px" class="width-full font-size-4">
          IRHTO is the most trusted Health Tourism Organizer in Iran. IRHTO
          provides international medical travel facilities with high quality
          healthcare services in IRAN.
        </p>
      </div>
      <img src="../assets/images/quote.png" alt="" />
    </div>
    <div class="width-full mt-7 max-width-1200">
      <div
        class="bottom-card position-relative hover-style-pack cursor-pointer"
      >
        <img src="../assets/images/MedicalVisaIRHTO.png" alt="" />
      </div>
    </div>
    <h1 class="mt-10">Services Included in IMT Packages</h1>
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
    <div class="width-full mt-7 max-width-1200">
      <MedicalGuide :cards="guideCards" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardPack from "~/components/components/cardPack.vue";
import MedicalGuide from "~/components/components/medicalGuide.vue";
import type { guide } from "~/components/types/guide.t";
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
