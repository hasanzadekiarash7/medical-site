<template>
  <div class="width-full position-relative">
    <img src="../../assets/images/backmain.png" class="width-full max-height-1200" style="object-fit: cover;" alt="" />
    <div class="pa-3 width-full d-flex flex-column flex-center">
      <div
        class="width-full d-flex position-absolute flex-space-between py-2 max-width-1440"
        style="top: 0"
      >
        <img
          src="../../assets/images/logo.png"
          class="width-full logo"
          alt=""
        />
        <ul class="d-flex flex-center gap-4 cursor-pointer text-white">
          <li>home</li>
          <li>about us</li>
          <li>services</li>
          <li>resources</li>
        </ul>
      </div>
      <div
        class="position-absolute d-flex flex-center gap-2 width-full align-flex-start max-width-1440 flex-row-reverse"
        style="top: 80px;"
        >
        <div class="landing-header--imgWrapper width-full height-full flex-1">
          <!-- <img src="../../assets/images/bones.jpg" class="width-full height-full" alt="" /> -->
        </div>
        <div class="landing-header--content flex-1">
          <h1 class="text-capitalize text-white font-size-10">
            the modern title and
          </h1>
          <h1 class="text-capitalize font-size-10 text-lime-200">
            closing experience
          </h1>
          <p
            class="text-capitalize text-white my-5 mb-7 line-space-6 font-size-5 max-width-700"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            suscipit magni necessitatibus minima in.
          </p>
          <div
            class="input input-filed height-full d-flex flex-start align-center width-full pa-1 radius-10"
          >
            <input
              type="text"
              placeholder="enter your checkup email"
              class="text-white font-500 classical-input outline-none border-none bg-transparent width-full font-size-5"
            />
            <button
              class="bg-lime-200 cursor-pointer outline-none text-black border-none font-size-3 font-bold height-full text-center radius-10"
            >
              lets checkup
            </button>
          </div>
          <p
            class="text-lime-200 d-flex flex-start align-center font-size-4 gap-1 mt-3 max-width-700"
          >
            <Icon name="mdi:check-circle" class="bg-black" size="25" />
            miss elham logged in before!.
          </p>
          <div
            class="fallow-her d-flex flex-start mt-6 width-full max-width-700 align-center gap-4"
          >
            <div class="d-flex flex-center">
              <img
                src="../../assets/images/avatar.jfif"
                class="avatar radius-8"
                alt=""
              />
              <img
                src="../../assets/images/avatar.jfif"
                class="avatar radius-8"
                alt=""
              />
              <img
                src="../../assets/images/avatar.jfif"
                class="avatar radius-8"
                alt=""
              />
            </div>
            <div
              class="fallow-her-content d-flex flex-start flex-column gap-2 text-white"
            >
              <strong class="font-size-3 text-capitalize"
                >your followers</strong
              >
              <p class="font-100 font-size-2 text-capitalize">
                they like you since a month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pa-6 width-full position-absolute d-flex flex-start" style="top: 66%">
      <img src="../../assets/images/logo.png" alt="" />
      <img src="../../assets/images/logo.png" alt="" />
      <img src="../../assets/images/logo.png" alt="" />
    </div>
    <div class="position-absolute width-full d-flex flex-center" style="bottom: 50px;">
        <h1 class="width-full max-width-1200 text-capitalize text-sky-400">popular treatment</h1>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  max-width: 100px;
}
.input-filed {
  border: 1px solid $white;
  max-width: 460px;
  min-height: 55px;
  backdrop-filter: blur(1px);
  input {
    // filter: blur(0.5px);
    padding-left: 10px;
    &::placeholder {
      filter: blur(0.5px);
      color: $white;
    }
  }
  button {
    width: 200px;
    padding: 18px 9px;
  }
}
.avatar {
  width: 40px;
  height: 40px;
  margin-left: -8px;
}
// .bg-image{
//     background: url('../../assets/images/backmain.png');
// }
</style>
