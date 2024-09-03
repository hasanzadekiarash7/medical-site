<template>
  <div class="width-full d-flex flex-center flex-column">
    <div class="width-full pa-2 mt-4 max-width-1200 mb-5">
      <Swiper
        :modules="modules"
        space-between="50"
        :pagination="{ clickable: true, dynamicBullets: true }"
        autoplay
        :slides-per-view="3"
      >
        <SwiperSlide
          v-for="item in popularItem"
          style="height: 100%; max-height: 550px"
        >
          <popular-treatment :items="item" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div
      class="width-full pa-2 mt-4 d-flex flex-column flex-center max-width-400 mb-5"
    >
      <h1 class="text-center font-size-6 text-black">best packages</h1>
      <p class="text-center font-size-5 text-gray-400 max-width-1200">
        fdhgdfjgfdhgdfhgdhghdghfghghdghdhlgdgfdfdgfdsfdhffhdsfdsgfdhdfshfjhg
        fgdfhgdfgngfghgfhgfhgfhhghfhhfhgfhgfhgfgghgfhgfhgfhhfhgfg
      </p>
      <div style="width: 100%" class="max-width-1200">
        <Swiper
          :modules="modules"
          space-between="10"
          effect="cube"
          :cube-effect="{ shadow: false }"
          loop
          :autoplay="{ delay: 6000 }"
          :slides-per-view="1"
        >
          <SwiperSlide v-for="item in 3">
            <best-packages />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="width-full bg-teal-300 d-flex flex-center">
      <treatment />
    </div>
    <div class="width-full d-flex mt-8 flex-center flex-column gap-4">
      <div
        class="content mt-8 width-full max-width-1200 d-flex align-flex-start flex-space-between"
      >
        <div>
          <h1 class="text-sky-300 text-capitalize font-size-8">
            chose your county
          </h1>
          <h1 class="text-capitalize font-size-4">
            to access to the free world
          </h1>
        </div>
        <div>
          <p class="text-black width-full max-width-450 mb-2 font-size-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            eligendi tempore rerum!
          </p>
          <div class="d-flex flex-start align-center gap-2">
            <button
              class="bg-lime-200 pa-4 cursor-pointer outline-none text-black border-none font-size-3 font-bold height-full text-center radius-10"
            >
              learn more
            </button>
            <Icon name="flag:ir-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:br-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:za-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:fi-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:us-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:cn-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:co-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:ru-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:au-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:gl-4x3" size="32" class="cursor-pointer" />
            <Icon name="flag:id-4x3" size="32" class="cursor-pointer" />
          </div>
        </div>
      </div>
      <div class="width-full">
        <img src="../assets/images/country.png" class="width-full" alt="" />
      </div>
    </div>
    <div class="width-full d-flex mt-8 flex-center">
      <medical-slide-tourism />
    </div>
    <div class="width-full max-width-1200 d-flex mt-8 pa-3 flex-center">
      <tourism />
    </div>
    <div class="width-full d-flex flex-center flex-column">
      <div class="width-full max-width-1200 mt-8 pa-3">
        <Swiper
          :modules="modules"
          space-between="10"
          :cube-effect="{ shadow: false }"
          :autoplay="{ delay: 7000 }"
          :slides-per-view="2"
        >
          <SwiperSlide v-for="item in 4">
            <doctor />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="width-full mt-7 max-width-1200">
      <h1 class="text-center text-capitalize my-10">media and news</h1>
      <Swiper
        :modules="modules"
        space-between="20"
        :pagination="{ clickable: true, dynamicBullets: true }"
        autoplay
        :slides-per-view="4"
      >
        <SwiperSlide v-for="item in medicalCenter">
          <imt-package-card :items="item" :has-action="false" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { packageCard, treatmentCard } from "~/components/types/cards.t";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectCards,
  EffectFade,
  Autoplay,
} from "swiper/modules";
const modules = ref([
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  EffectCube,
  EffectCards,
  EffectFade,
]);
const popularItem: treatmentCard[] = [
  {
    title: "Rhinoplasty",
    description: `
      Nose surgery is the Iran’s most common cosmetic surgery
      `,
    imageLink: "/card_p1.jpg",
  },
  {
    title: "Liposuction",
    description: `
  Liposuction or Lipoplasty, sometimes referred to as “lipo” by patients, slims and reshapes specific areas
      `,
    imageLink: "/card_p5.jpg",
  },
  {
    title: "IVF",
    description: `
  IVF (In Vitro Fertilization) is an assisted reproductive technology (ART) commonly referred to as IVF
      `,
    imageLink: "/card_p4.jpg",
  },
  {
    title: "Urology",
    description: `
  Urology, also known as genitourinary surgery, is the branch of medicine that focuses on surgical and medical diseases of the male and female urinary-tract system and the male reproductive organs.
      `,
    imageLink: "/card_p3.jpg",
  },
  {
    title: "Hair Loss",
    description: `
  Hair loss, also known as alopecia or baldness, refers to a loss of hair from part of the head or body. Typically at least the head is involved. The severity of hair loss can vary from a small area to the entire body
      `,
    imageLink: "/card_p2.jpg",
  },
  {
    title: "Bones, muscles & joints",
    description: `
  Knee replacement Surgery is a very effective surgical method that reduces your extremely unbearable knee pain and discomfort dramatically
      `,
    imageLink: "/card_p6.jpg",
  },
];
const medicalCenter: packageCard[] = [
  {
    title: "razavi",
    imageLink: "/card_b2.jfif",
  },
  {
    title: "mehr",
    imageLink: "/card_b1.jpg",
  },
  {
    title: "javad ol aemeh",
    imageLink: "/card_b4.jfif",
  },
  {
    title: "parsian",
    imageLink: "/card_b3.jpg",
  },
  {
    title: "emam reza",
    imageLink: "/card_b2.jpg",
  },
];
</script>

<style lang="scss" scoped></style>
